const EventEmitter = require('events')  // declaration of a class

const customEmitter = new EventEmitter();

customEmitter.on('response',()=>{
    console.log(`Data received`)
})

customEmitter.emit('response') 
// If I place this emit() above the on() then nothing will come on the console as it only performs
// those tasks that are above the emit()

customEmitter.on('greet',(name, id)=>{
    console.log(`Hello user ${name} with id : ${id}`)
})

customEmitter.emit('greet','Oxallion',34);