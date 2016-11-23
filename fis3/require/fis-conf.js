fis.match('*.{js,css}', {
    useHash: true
})

fis.match('**.js', {
    release : '/static/js/$0'
});
fis.match('**.css', {
    release : '/static/css/$0'
});

fis.match('*.html', {
    useMap: true
})