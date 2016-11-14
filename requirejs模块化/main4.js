// 配置
require.config({
    paths: {
        "jquery" : "./core/jquery-3.1.1.min"
    }
});

// 第一次调用
require(['jquery'], function (jq){

    var obj1 = jq(document);
    console.log(obj1[0].charset);

    var obj2 = $(document);
    console.log(obj2[0].charset);
});