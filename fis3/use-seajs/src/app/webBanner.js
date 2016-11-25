define(function(require, exports, module) {

    var $ = require('jquery');

    function WebBanner(container){
        this.container = $(container);
        this.username = "";
    }

    module.exports = WebBanner;

    WebBanner.prototype.render = function() {
        this._init();
        this.container.html(this.username);
        console.log(this.username);
    }

    WebBanner.prototype._init = function() {
        this.username = "hans";
    }

});