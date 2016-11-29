
// 创建 Buffer

var buf1 = new Buffer(10);
var buf2 = new Buffer([10, 20, 30, 40, 50]);
var buf3 = new Buffer("京东(JD.COM)-综合网购首选-正品低价、品质保障、配送及时、轻松购物！", "utf-8");

// 写入缓冲区

buf3 = new Buffer(256);
len = buf3.write("京东(JD.COM)-综合网购首选-");

console.log("写入字节数 : "+  len);

// 从缓冲区读取数据

console.log(buf3.toString('utf-8',0,6));

// 将 Buffer 转换为 JSON 对象

var json = buf3.toJSON();
console.log("转换为 JSON 对象 : "+json);

// 缓冲区合并

var buffer1 = new Buffer('京东(JD.COM)-综合网购首选-');
var buffer2 = new Buffer('正品低价、品质保障、配送及时、轻松购物！');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());

// 缓冲区比较

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}

// 拷贝缓冲区

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("拷贝缓冲区 : " + buffer2.toString());

// 缓冲区裁剪

var buffer1 = new Buffer('京东(JD.COM)-综合网购首选-');
var buffer2 = buffer1.slice(0,6);
console.log("缓冲区裁剪 : " + buffer2.toString());

// 缓冲区长度

console.log("缓冲区长度 : " + buffer1.length);
