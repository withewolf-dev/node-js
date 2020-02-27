// example to use stream and sending a html page to the client index.html




const http = require('http')
const fs = require('fs')
const server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    const readstream = fs.createReadStream(__dirname +'/index.html','utf8')
    readstream.pipe(res);
});

// server.listen(3000)
console.log('server starting...');
