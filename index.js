var MODULE = (function(my) {
    var _this = my;

    my.generate = function() {
        _this.generateThemeOption();
        _this.generateTitle();
        _this.generateSelection();
        _this.generateProgressBars();
        _this.generateButton();
    }

    return my;
})(MODULE || {});

(function() {
    MODULE.getBars();
})();