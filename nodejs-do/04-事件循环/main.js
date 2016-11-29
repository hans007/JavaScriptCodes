var events = require("events");
var eventEmitter = new events.EventEmitter();

var listeneUserLogin = function(name,pwd){
  console.log("用户登录:"+name+pwd);
};

eventEmitter.addListener("userLogin", listeneUserLogin);

eventEmitter.emit("userLogin","hans","123456");

console.log("---end---");
