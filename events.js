const EventEmitter = require('events');
const emitter = new EventEmitter();

//register a listener
emitter.on('messagelogged',function(){
    console.log('listening....');
});


//raie a event
emitter.emit('messagelogged');
