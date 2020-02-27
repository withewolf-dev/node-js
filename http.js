const http = require('http')

const server = http.createServer(function(req,res){
    res.end('hey everyone')
});

server.listen(3000)
console.log('server starting...');
