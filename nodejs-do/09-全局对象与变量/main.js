// 程序运行耗时
console.time("程序运行耗时");

// __filename 
console.log(__filename);

// __dirname
console.log(__dirname);

// setTimeout(cb, ms)
// 只执行一次指定函数
function printHello() {
    console.log("Hello, World!");
}
var t = setTimeout(printHello, 1000);

// 清除定时器
//clearTimeout(t);

// setInterval(cb, ms)
// 会不停地调用函数
//setInterval(printHello, 2000);

// clearInterval(t) 函数来清除定时器

// console
console.log('Hello world');
console.log('byvoid%diovyb');
console.log('byvoid%diovyb', 1991);
console.trace();

// process
// 当前进程
process.on('exit', function (code) {

    // 以下代码永远不会执行
    setTimeout(function () {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});
console.log("程序执行结束");

// process 属性 
console.log("进程号:" + process.pid);
console.log("平台系统:" + process.platform);
console.log("绝对路径:" + process.execPath);

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// process 方法

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());

console.timeEnd('程序运行耗时');
console.info("程序执行完毕。")