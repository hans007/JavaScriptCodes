// 非单例
define(function () {

    console.log('module2 被装载~');

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

    return function () {
        return new UserModel();
    };
});