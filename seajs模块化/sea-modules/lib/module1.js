// 单例模式
define(function(require, exports, module) {

    console.log("module1 被装载~");

    exports.num = 10;

    exports.add = function(){
        this.num ++;
    };

    exports.get = function(){
        return this.num;
    };

});