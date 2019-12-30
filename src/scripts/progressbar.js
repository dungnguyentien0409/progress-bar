"use strict";

var MODULE = (function(my) {
    var _this = my;
    var progressBarContainer = document.createElement("div");
    progressBarContainer.setAttribute("class", "w3-row margin w3-mobile");

    my.generateProgressBars = function() {
        for(var i = 0; i < _this.bars.length; i++) {
            var bar = _this.bars[i];
            var progress = document.createElement("div");
            progress.setAttribute('class', 'w3-row progress no-padding-left tooltip');

            var progressBar = document.createElement("div");
            progressBar.setAttribute("id", bar.id);
            progressBar.setAttribute("class", "progress-bar no-padding-left");
            progressBar.setAttribute("style", "width:" + bar.percentage + "%");

            var percentage = document.createElement("div");
            percentage.setAttribute("id", bar.id + "percentage");
            percentage.setAttribute("class", "percentage");
            percentage.innerHTML = bar.percentage + "%" 
                                   + " - Value: " + bar.value;

            if (i == 0) {
                progressBar.className += " selectedProgress";
            }

            progress.appendChild(progressBar);
            progress.appendChild(percentage);
            progressBarContainer.appendChild(progress);
        }

        var limit = document.createElement("div");
        limit.setAttribute("class", "w3-row limit w3-mobile");
        limit.innerHTML = "Limit value: " + _this.limit;
        progressBarContainer.appendChild(limit);

        _this.container.appendChild(progressBarContainer);
    }

    return my;
})(MODULE || {})