const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("HI this is the Home page...");
    res.end('Hello World');
})

server.listen(5000,()=>{
    console.log('Server Listening on port no 5000');
})