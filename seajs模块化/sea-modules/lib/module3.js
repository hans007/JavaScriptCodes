// 模块依赖
define(['../../../requirejs模块化/lib/module1'],function(require, exports, module) {

    console.log("module3 被装载~");

    var mod1 = require('module1');

    mod1.add();
});