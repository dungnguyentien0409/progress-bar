"use strict";

var MODULE = (function(my) {
    var _this = my;

    my.generateButton = function() {
        var btnContainer = document.createElement("div");
        btnContainer.setAttribute("class", "w3-row");

        var btnGroup = document.createElement("div");
        btnGroup.setAttribute("class", "button-container");
        for (let value of _this.buttons) {
            var button = document.createElement("button");
            button.setAttribute("class", "button w3-mobile");
            button.innerHTML = value;

            button.addEventListener("click", function() {
                _this.onClick(value)
            });

            btnGroup.appendChild(button);
        }

        btnContainer.appendChild(btnGroup);
        _this.container.appendChild(btnContainer);
    }

    my.onClick = function(value) {
        var e = document.getElementById("selectProgressBar");
        var id = e.options[e.selectedIndex].value;
        var progressBar = document.getElementById(id);
        var percentage = document.getElementById(id + "percentage");
    
        for (var bar of _this.bars) {
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

    return my;
})(MODULE || {})