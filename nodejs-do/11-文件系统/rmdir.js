var fs = require("fs");

console.log("准备删除目录 ./test");
fs.rmdir("./test", function (err) {
    if (err) {
        return console.error(err);
    }
});