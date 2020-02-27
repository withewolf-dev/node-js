

const http = require('http')

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })

  if (req.url === '/home' || req.url === '/') {
    res.end('We are in homepage')
  } else if (req.url === '/about-us') {
    res.end('This is about us page')
  } else if (req.url === '/singers') {
    const singerList = {
      first: 'Adam',
      second: 'Demi',
      third: 'Nicky'
    }

    res.end(JSON.stringify(singerList))
  } else {
    res.end('Not found')
  }
})

server.listen(3000)
console.log('server started in port 3000...')

