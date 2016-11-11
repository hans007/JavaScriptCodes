// 配置
require.config({
    baseUrl: "lib/"
});

// 第一次调用
require(['module3'], function (mod3){

    mod3().add();
    mod3().add();
    mod3().add();

    console.log(mod3().show());
});

// 第一次调用
require(['module3'], function (mod3){

    mod3().add();
    mod3().add();
    mod3().add();

    console.log(mod3().show());
});