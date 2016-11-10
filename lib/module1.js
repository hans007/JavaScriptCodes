// 单例
define(function () {

    console.log('module1 被装载~');

    var num = 0;

    var add = function () {
        num++;
    };

    var get = function () {
        return num;
    };

    return{
        add : add,
        get : get
    };
});