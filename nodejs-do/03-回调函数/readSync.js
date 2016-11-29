var fs = require("fs");

var data = fs.readFileSync("title.txt");

console.log(data.toString());
console.log("--- end ---");
