// import/require the events module
var events = require('events');

// create your event emitter
var eventEmitter = new events.EventEmitter();

// create an event handler, a simply function that indicates a user just logged-in
var authHandler = () => {
    console.log("User just logged-in.");
    // fire the event login success
    eventEmitter.emit('login_ok');
}

// bind the login event with the handler
eventEmitter.on('login', authHandler);
// bind the login_ok event with some other anonymous handler
eventEmitter.on('login_ok', ()=> {
    console.log("login successs confirmed");
})

// fire the events
eventEmitter.emit('login');