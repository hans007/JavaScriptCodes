function Hello() {
    var num;
    this.add = function (val) {
        num = val;
    };
    this.say = function () {
        console.log("hello : " + num);
    };
};
module.exports = Hello;