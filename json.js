const http = require('http')

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'application/json'})

    const singerlist ={
        first:'adam',
        second:'harry',
        third:'arijit'
    }

    res.end(JSON.stringify(singerlist)) //JSON.stringify()` A common use of
    //JSON is to exchange data to/from
    //a web server.
})
server.listen(3004)
console.log('server starting . . .')