
define(function (require, exports, module) {

    var config = require("../system/config");
    console.log(config.serverip());

    exports.list = function(){
        return "产品列表...";
    };

});