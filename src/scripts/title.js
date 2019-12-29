var MODULE = (function(my) {
    var _this = my;

    my.generateTitle = function() {
        var title = document.createElement("h3");
        title.innerHTML = _this.app_title;
        title.setAttribute("class", "title margin");
        _this.container.appendChild(title);
    }

    return my;
})(MODULE || {});