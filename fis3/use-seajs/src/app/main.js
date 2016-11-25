define(function(require) {
    var WebBanner = require('./webBanner.js');

    var banner = new WebBanner('#userName');
    banner.render();
});