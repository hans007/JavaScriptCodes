// 第一次调用
require(['lib/module2'], function (mod2){

    var mod = mod2();
    mod.add();
    mod.add();
    mod.add();

    console.log(mod.show());
});

// 第二次调用
require(['lib/module2'], function (mod2){

    var mod = mod2();
    mod.add();
    mod.add();
    mod.add();

    console.log(mod.show());
});