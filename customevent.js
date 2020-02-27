const events = require('events')
const MyEmitter = new events()

MyEmitter.on('custom',function(msg){
    console.log(msg)
})

MyEmitter.emit('custom','this is working')