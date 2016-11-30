var util = require('util');

// 基类
function Base(){
    this.name = 'base';
    this.say = function(){
        console.log('say:'+this.name);
    };
}
Base.prototype.show = function(){
    console.log('show:'+this.name);
};

// 继承类
function Sub(){
    this.name = 'sub';
}

util.inherits(Sub,Base);

var objSub = new Sub();
objSub.say();
objSub.show();

