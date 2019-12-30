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
    var _this = MODULE;
    var callback = {
        success: function(data) {
            _this.generate();
        },
        error: function(data) {
            console.log(data);
        }
        
    };

    MODULE.getBars().then(callback.success, callback.error);
})();