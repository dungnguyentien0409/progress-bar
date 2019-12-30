var MODULE = (function(my) {
    var _this = my;
    
    my.parseData = function(response) {
        _this.buttons = response["buttons"];
        _this.limit = parseInt(response["limit"]);

        for(var i = 0; i < response["bars"].length; i++) {
            var item = {};

            item.id = "progress" + (i + 1);
            item.value = parseInt(response["bars"][i]);
            item.percentage = Math.floor(item.value / _this.limit * 100);

            _this.bars.push(item);
        }
    }

    my.getBars = function() {
        var promise = new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();

            request.open('GET', 'http://pb-api.herokuapp.com/bars', true);
            request.onload = function () {
                _this.parseData(JSON.parse(this.response));
                console.log(this.response);
                resolve();
            }
            request.send();
        })
        return promise;
    }

    return my;
})(MODULE || {})