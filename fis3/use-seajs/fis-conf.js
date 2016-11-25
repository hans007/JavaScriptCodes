// 只需要编译 html 文件，以及其用到的资源。
fis.set('project.files', ['*.html', 'map.json']);

fis.match('/src/**/*.js', {
  isMod: true
});

fis.match('/static/sea.js', {
  isMod: false
});

fis.hook('cmd', {
  baseUrl: './src/',
  paths: {
    "jquery": "jquery/jquery-debug.js",
    "$": "jquery/jquery-debug.js"
  }
});

fis.match('::packager', {
    postpackager: fis.plugin('loader', {
      allInOne: {
        includeAsyncs: true,
        ignore: ['/static/sea.js']
      }
    })
  });