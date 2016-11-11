// 第一次调用
require(['lib/module1'], function (mod1){

    mod1.add();
    mod1.add();
    console.log(mod1.get());
});

// 第二次调用
require(['lib/module1'], function (mod1){

    mod1.add();
    mod1.add();
    console.log(mod1.get());
});