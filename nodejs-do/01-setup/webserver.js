var http = require("http")
http.createServer(function(request, response){
  response.writeHead(200,{'content-Type':'text/plain'});
  response.end('hello word!');
}).listen(8888);

console.log('web server is running! http://127.0.0.1:8888/');
