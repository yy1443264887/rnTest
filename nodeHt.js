let http=require('http')
let url=require('url')
http.createServer(function (request, response) {
    console.log(url.parse(request.url).query )
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World',true);
}).listen(7598);

console.log('Server running at http://127.0.0.1:7598/');