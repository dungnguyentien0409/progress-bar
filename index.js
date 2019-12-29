var MODULE = (function(my) {
    var _this = my;
    
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

    return my;
})(MODULE || {});

(function() {
    MODULE.getBars();
})();