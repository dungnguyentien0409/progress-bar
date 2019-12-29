var MODULE = (function(my) {
    var _this = my;

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

    my.changeTheme = function(color) {
        if (color != currentTheme) {
            _this.container.classList.remove(currentTheme);

            currentTheme = color;
            _this.container.className += (" " + color);
        }
    }
    
    return my;
})(MODULE || {})