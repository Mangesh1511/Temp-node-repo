const EventEmitter=require('events')

const customEmmiter = new EventEmitter()

customEmmiter.on('response',(name,id)=>{
    console.log(`Data received ${name},${id}`)
})
customEmmiter.on('response',()=>{
    console.log('some other logic here');
})

customEmmiter.emit('response','john','34');
// customEmmiter.emit('response');
