// 非单例模式
define(function(require, exports, module) {

    console.log("module2 被装载~");

    function UserModel() {

        var num = 1000;
        var name = "AAAAA";
        var uid = "1001";

        this.add = function () {
            num ++;
        };
        this.show = function () {
            return num + ":" + name + ":" + uid;
        };
    }

    module.exports = function () {
        return new UserModel();
    };
});