// class
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('messageLogged = ',arg)
}) 

// emit: Making a noise, produce --singalling
// Rasise an event-called messageLogged
emitter.emit('messageLogged',{id:1,url:'http:test.com'})