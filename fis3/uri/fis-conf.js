fis.match('*.{js,css,png,gif}', {
    useHash: true // 开启 md5 戳
});

fis.match('**.js', {
    release : '/static/js/$0'
});
fis.match('**.css', {
    release : '/static/css/$0'
});
fis.match('**.(png)', {
    release : '/static/png/$1',
    url : '$1',
    domain: 'http://cdn.baidu.com/'
});




