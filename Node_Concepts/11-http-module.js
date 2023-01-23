const http = require('http');

const server=http.createServer((req,res)=>{
    
    if(req.url==='/'){
        // console.log(req);
        res.end('Welcome to my home page!!')
    }
    else if(req.url==='/about'){
        // console.log(req);
        res.end('Welcome to about us page!!')
    }
    else
    res.end(`<h1>Oops!!</h1>
     <p>Page not found</p>
     <a href='/'>Back to Home</a>`)
    
    

    
    
})

server.listen(5000)