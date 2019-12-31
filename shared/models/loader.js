"use strict";

var LOADER = (function(my) {
    my.root = document.getElementById('root');
    my.loader = document.createElement("div")
    
    var _this = my;
    my.generateLoader = function() {
        _this.loader.setAttribute("class", "loader");

        _this.root.appendChild(_this.loader);
    }

    my.hideLoader = function() {
        _this.loader.className += " hide";
    }
    
    return my;
})(LOADER || {})