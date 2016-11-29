var mod1 = require("./mod1");
var Hello = require("./mod2");

mod1.say("hello!");

var mod2 = new Hello();
mod2.add(12);
mod2.say();