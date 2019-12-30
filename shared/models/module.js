"use strict";

var MODULE = (function(my) {
    my.app_title = "Progress Bars Demo";
    my.buttons = [];
    my.bars = [];
    my.limit = 0;
    my.currentTheme = "";
    my.container = document.getElementById('container');
    
    return my;
})(MODULE || {})