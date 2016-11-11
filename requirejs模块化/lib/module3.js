// 继承
define(['module1'],function (mod1) {

    console.log('module3 被装载~');

    mod1.show = function () {
        return "number:"+mod1.get();
    };

    return function () {
        return mod1;
    };
});