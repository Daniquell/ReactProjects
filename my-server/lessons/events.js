const Emitter = require("events");
let emitter = new Emitter();
let eventName = "greet";
let name;
emitter.on(eventName, function(data){
    return name=data
});
 
emitter.on(eventName, function(data){
    return name=data
});
 
emitter.emit(eventName, ' from Andrei');
module.exports.getName=()=>{
    return name
}