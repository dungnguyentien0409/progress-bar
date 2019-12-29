const app = document.getElementById('root');
var container;
var currentTheme;

(function() {
    //var div = document.getElementById("root");
    //div.innerHTML = "abc1";
    container = document.createElement("div");
    container.setAttribute("class", "container blue");
    app.appendChild(container);

    getBars();
})()

var buttons = [];
var bars = [];
var limit = 0;
function getBars() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://pb-api.herokuapp.com/bars', true);
    request.onload = function () {
        parseData(JSON.parse(this.response));
        generate();
    }

    request.send();
}

function generate() {
    generateThemeOption();
    generateTitle();
    generateSelection();
    generateProgressBars();
    generateButton();
}

function parseData(response) {
    buttons = response["buttons"];
    limit = parseInt(response["limit"]);

    for(var i = 0; i < response["bars"].length; i++) {
        var item = {};

        item.id = "progress" + (i + 1);
        item.value = parseInt(response["bars"][i]);
        item.percentage = Math.floor(item.value / limit * 100);

        bars.push(item);
    }
}

function generateTitle() {
    var title = document.createElement("h3");
    title.innerHTML = "Progress Bars Demo";
    title.setAttribute("class", "title margin");
    container.appendChild(title);
}

function generateThemeOption() {
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
        }

        radio.addEventListener("click", function() {
            changeTheme(this.value);
        });
        
        var label = document.createElement("label");
        label.setAttribute("class", "label-" + color);
        label.innerHTML = color;

        theme.appendChild(radio);
        theme.appendChild(label);
    }

    container.appendChild(theme);
}

function generateProgressBars() {
    for(var i = 0; i < bars.length; i++) {
        var bar = bars[i];
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
        container.appendChild(progress);
    }
}

function generateSelection() {
    var selectContainer = document.createElement("div");
    selectContainer.setAttribute("class", "select-container");

    var select = document.createElement("select");
    select.setAttribute("id", "selectProgressBar");
    select.setAttribute("class", "select margin")

    for (var i = 0; i < bars.length; i++) {
        var bar = bars[i];
        var option = document.createElement("option");
        option.setAttribute("value", bar.id);
        option.innerHTML = "#" + bar.id;

        if (i == 0) {
            option.setAttribute("selected", "selected");
        }

        select.appendChild(option);
    }

    select.addEventListener("change", function() {
        onChangeSelection();
    })

    selectContainer.appendChild(select);
    container.appendChild(selectContainer);
}

function generateButton() {
    var btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "button-container");

    for (let value of buttons) {
        var button = document.createElement("button");
        button.setAttribute("class", "button");
        button.innerHTML = value;

        button.addEventListener("click", function() {
            onClick(value)
        });

        btnContainer.appendChild(button);
    }

    container.appendChild(btnContainer);
}

function changeTheme(color) {
    if (color != currentTheme) {
        container.classList.remove(currentTheme);

        currentTheme = color;
        container.className += (" " + color);
    }
}

function onClick(value) {
    var e = document.getElementById("selectProgressBar");
    var id = e.options[e.selectedIndex].value;
    var progressBar = document.getElementById(id);
    var percentage = document.getElementById(id + "percentage");

    for (var bar of bars) {
        if (bar.id == id) {
            bar.percentage += parseInt(value);
            progressBar.classList.remove("over100");
           
            if (bar.percentage > 100) {
                progressBar.className += " over100";
            }
            else if (bar.percentage < 0) {
                bar.percentage = 0;
            }
            
            if (bar.percentage > 100) {
                progressBar.style.width = 100 + "%";
            }
            else {
                progressBar.style.width = bar.percentage + "%";
            }
            percentage.innerHTML = bar.percentage + "%";
            break;
        }
    }
}

function onChangeSelection() {
    removeSelectedCss();

    var e = document.getElementById("selectProgressBar");
    var id = e.options[e.selectedIndex].value;
    var progressBar = document.getElementById(id);

    progressBar.className += " selectedProgress";
}

function removeSelectedCss() {
    var items = document.getElementsByClassName("selectedProgress");
    console.log(items.length);
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        item.classList.remove("selectedProgress");
    }
}

