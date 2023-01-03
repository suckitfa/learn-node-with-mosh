const EventEmitter = require('events')
class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message)
        // Raise an event
        this.emit('messageLogged',{id:1,url:"http://test.com"})
    }
}
module.exports = Logger;
// var x=;
// var url = 'http://test.com'
// function log(message) {
//     // Send an HTTP request
//     console.log(message)
// }

// export 
// module.exports.log = log;

// wrapper into a function, immediate exec function
// (function(exports,require,module, __filename, __dirname){

// }())