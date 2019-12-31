"use strict";

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

var LOADER = (function(my) {
    return my;
})(LOADER || {});

(function() {
    var _this = MODULE;
    var loader = LOADER;

    loader.generateLoader();

    var callback = {
        success: function(data) {
            _this.generate();
            loader.hideLoader();
        },
        error: function(data) {
            console.log(data);
        }
        
    };

    MODULE.getBars().then(callback.success, callback.error);
})();

function createLoader() {
    var loader = document.createElement("div");
    loader.setAttribute("class", "loader");
}