"use strict";

var MODULE = (function(my) {
    var _this = my;

    my.generateThemeOption = function() {
        var theme = document.createElement("div");
        theme.setAttribute("class", "theme margin");
        var title = document.createElement("label");
        title.innerHTML = "Theme: ";
        theme.appendChild(title);

        var colors = ["blue", "yellow", "green"];

        for (var i = 0; i < colors.length; i++) {
            var radioContainer = document.createElement("span");
            radioContainer.setAttribute("class", "w3-mobile");

            var color = colors[i];
            var radio = document.createElement("input");
            radio.setAttribute("name", "radioTheme");
            radio.setAttribute("type", "radio");
            radio.setAttribute("value", color);
            radio.setAttribute("class", "radio");
            if (i == 0) {
                //default value
                _this.currentTheme = color;
                radio.setAttribute("checked", "checked");
                _this.container.className += (" " + color);
            }

            radio.addEventListener("click", function() {
                _this.changeTheme(this.value);
            });
            
            var label = document.createElement("label");
            label.setAttribute("class", "label-" + color);
            label.innerHTML = color;

            radioContainer.appendChild(radio);
            radioContainer.appendChild(label);
            theme.appendChild(radioContainer);
        }

        _this.container.appendChild(theme);
    }

    my.changeTheme = function(color) {
        if (color != _this.currentTheme) {
            _this.container.classList.remove(_this.currentTheme);

            _this.currentTheme = color;
            _this.container.className += (" " + color);
        }
    }
    
    return my;
})(MODULE || {})