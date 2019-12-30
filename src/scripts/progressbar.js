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
            percentage.innerHTML = bar.percentage + "%";

            var tooltip = document.createElement("span");
            tooltip.setAttribute("id", bar.id + "tooltip");
            tooltip.setAttribute("class", "tooltiptext");
            tooltip.innerHTML += ("Value: " + bar.value + "- Limit: " + _this.limit);

            if (i == 0) {
                progressBar.className += " selectedProgress";
            }

            progress.appendChild(progressBar);
            progress.appendChild(percentage);
            progress.appendChild(tooltip);
            progressBarContainer.appendChild(progress);
        }

        _this.container.appendChild(progressBarContainer);
    }

    return my;
})(MODULE || {})