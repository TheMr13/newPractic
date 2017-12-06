var http = require('http')
var fs = require('fs')

var ip = '(https://127.0.0.1)'
var port = 3000

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url)
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(res);

});

server.listen(port, ip);
console.log(`sup homie, we are now running your pracrtice server and listening ${ip}:${port}`);
