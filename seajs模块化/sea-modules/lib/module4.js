define("lib/module4", [ "./module4-ui", "jquery" ], function(require) {
    var ui = require("./module4-ui");
    ui.setup();
});

define("lib/module4-ui", ["jquery","dialog"], function(require, exports, module) {

    var $ = require("jquery");
    var dialog = require("dialog");

    exports.setup = function () {

        $("#myButton").click( function () {
            // alert(123);

            var d = dialog({
                title: '欢迎',
                content: '欢迎使用 artDialog 对话框组件！'
            });
            d.showModal();
        });
    };
});