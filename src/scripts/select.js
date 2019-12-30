"use strict";

var MODULE = (function(my) {
    var _this = my;

    my.generateSelection = function() {
        var selectContainer = document.createElement("div");
        selectContainer.setAttribute("class", "w3-row select-container");

        var div = document.createElement("div");
        div.setAttribute("class", "w3-twothird w3-container");
        selectContainer.appendChild(div);

        var select = document.createElement("select");
        select.setAttribute("id", "selectProgressBar");
        select.setAttribute("class", "w3-thrid select margin")

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