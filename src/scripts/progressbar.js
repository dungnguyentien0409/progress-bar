var MODULE = (function(my) {
    my.currentTheme = "";
    my.container = document.getElementById('container');
    my.buttons = [];
    my.bars = [];
    my.limit = 0;
    
    var _this = my;
    my.parseData = function(response) {
        _this.buttons = response["buttons"];
        _this.limit = parseInt(response["limit"]);

        for(var i = 0; i < response["bars"].length; i++) {
            var item = {};

            item.id = "progress" + (i + 1);
            item.value = parseInt(response["bars"][i]);
            item.percentage = Math.floor(item.value / _this.limit * 100);

            _this.bars.push(item);
        }
    }

    my.getBars = function() {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://pb-api.herokuapp.com/bars', true);
        request.onload = function () {
            _this.parseData(JSON.parse(this.response));
            _this.generate();
        }

        request.send();
    }

    my.generate = function() {
        _this.generateThemeOption();
        _this.generateTitle();
        _this.generateSelection();
        _this.generateProgressBars();
        _this.generateButton();
    }

    my.generateTitle = function() {
        var title = document.createElement("h3");
        title.innerHTML = "Progress Bars Demo";
        title.setAttribute("class", "title margin");
        _this.container.appendChild(title);
    }

    my.generateThemeOption = function() {
        var theme = document.createElement("div");
        theme.setAttribute("class", "theme");
        var title = document.createElement("label");
        title.innerHTML = "Theme: ";
        theme.appendChild(title);

        var colors = ["blue", "yellow", "green"];

        for (var i = 0; i < colors.length; i++) {
            var color = colors[i];
            var radio = document.createElement("input");
            radio.setAttribute("name", "radioTheme");
            radio.setAttribute("type", "radio");
            radio.setAttribute("value", color);
            radio.setAttribute("class", "radio");
            if (i == 0) {
                //default value
                currentTheme = color;
                radio.setAttribute("checked", "checked");
                _this.container.className += (" " + color);
            }

            radio.addEventListener("click", function() {
                _this.changeTheme(this.value);
            });
            
            var label = document.createElement("label");
            label.setAttribute("class", "label-" + color);
            label.innerHTML = color;

            theme.appendChild(radio);
            theme.appendChild(label);
        }

        _this.container.appendChild(theme);
    }

    my.generateProgressBars = function() {
        for(var i = 0; i < _this.bars.length; i++) {
            var bar = _this.bars[i];
            var progress = document.createElement("div");
            progress.setAttribute('class', 'progress margin');

            var progressBar = document.createElement("div");
            progressBar.setAttribute("id", bar.id);
            progressBar.setAttribute("class", "w3-container progress-bar noPadding");
            progressBar.setAttribute("style", "width:" + bar.percentage + "%");

            var percentage = document.createElement("div");
            percentage.setAttribute("id", bar.id + "percentage");
            percentage.setAttribute("class", "percentage");
            percentage.innerHTML = bar.percentage + "%";

            if (i == 0) {
                progressBar.className += " selectedProgress";
            }

            progress.appendChild(progressBar);
            progress.appendChild(percentage);
            _this.container.appendChild(progress);
        }
    }

    my.generateSelection = function() {
        var selectContainer = document.createElement("div");
        selectContainer.setAttribute("class", "select-container");

        var select = document.createElement("select");
        select.setAttribute("id", "selectProgressBar");
        select.setAttribute("class", "select margin")

        for (var i = 0; i < _this.bars.length; i++) {
            var bar = _this.bars[i];
            var option = document.createElement("option");
            option.setAttribute("value", bar.id);
            option.innerHTML = "#" + bar.id;

            if (i == 0) {
                option.setAttribute("selected", "selected");
            }

            select.appendChild(option);
        }

        select.addEventListener("change", function() {
            _this.onChangeSelection();
        })

        selectContainer.appendChild(select);
        _this.container.appendChild(selectContainer);
    }


    my.changeTheme = function(color) {
        if (color != currentTheme) {
            _this.container.classList.remove(currentTheme);

            currentTheme = color;
            _this.container.className += (" " + color);
        }
    }

    my.onChangeSelection = function() {
        _this.removeSelectedCss();

        var e = document.getElementById("selectProgressBar");
        var id = e.options[e.selectedIndex].value;
        var progressBar = document.getElementById(id);

        progressBar.className += " selectedProgress";
    }

    my.removeSelectedCss = function() {
        var items = document.getElementsByClassName("selectedProgress");

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.classList.remove("selectedProgress");
        }
    }

    return my;
})(MODULE || {})