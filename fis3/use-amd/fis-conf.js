// 开启 amd 插件
fis.hook('amd');

// 指定哪些需要被格式化的模块js
fis.match('/amd-module/**/*.js', {
    isMod: true
    //release: '/static/$0'
});

// 需要排除的文件
fis.match('/static/require.js', {
    isMod: false
});