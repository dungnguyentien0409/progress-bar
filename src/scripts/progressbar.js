const app = document.getElementById('root');
var container;

(function() {
    //var div = document.getElementById("root");
    //div.innerHTML = "abc1";
    container = document.createElement("div");
    container.setAttribute("class", "container");
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
    var title = document.createElement("h3");
    title.innerHTML = "Progress Bars Demo";
    title.setAttribute("class", "title margin");
    container.appendChild(title);

    generateProgressBars();
    generateSelection();
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

function generateProgressBars() {
    for(var i = 0; i < bars.length; i++) {
        var bar = bars[i];
        var progress = document.createElement("div");
        progress.setAttribute('class', 'w3-light-grey margin');

        var progressBar = document.createElement("div");
        progressBar.setAttribute("id", bar.id);
        progressBar.setAttribute("class", "w3-container w3-light-blue w3-center");
        progressBar.setAttribute("style", "width:" + bar.percentage + "%");
        progressBar.innerHTML = bar.percentage + "%";

        if (i == 0) {
            progressBar.className += " selectedProgress";
        }

        progress.appendChild(progressBar);
        container.appendChild(progress);
    }
}

function generateSelection() {
    var combobox = document.createElement("select");
    combobox.setAttribute("id", "selectProgressBar");
    combobox.setAttribute("class", "combobox margin")

    for (var i = 0; i < bars.length; i++) {
        var bar = bars[i];
        var option = document.createElement("option");
        option.setAttribute("value", bar.id);
        option.innerHTML = "#" + bar.id;

        if (i == 0) {
            option.setAttribute("selected", "selected");
        }

        combobox.appendChild(option);
    }

    combobox.addEventListener("change", function() {
        onChangeSelection();
    })
    container.appendChild(combobox);
}

function generateButton() {
    for (let value of buttons) {
        var button = document.createElement("button");
        button.setAttribute("class", "button margin");
        button.innerHTML = value;

        button.addEventListener ("click", function() {
            onClick(value)
        });

        container.appendChild(button);
    }
}

function onClick(value) {
    var e = document.getElementById("selectProgressBar");
    var id = e.options[e.selectedIndex].value;
    var progressBar = document.getElementById(id);
    
    for (var bar of bars) {
        if (bar.id == id) {
            bar.percentage += parseInt(value);
            if (bar.percentage > 100) bar.percentage = 100;
            else if (bar.percentage < 0) bar.percentage = 0;

            progressBar.style.width = bar.percentage + "%";
            progressBar.innerHTML = bar.percentage + "%";
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

