const http=require('http');

const server =http.createServer((req,res)=>{

    if(req.url==='/'){
        res.end('Home Page !!')
    }
    else if(req.url==='/about'){
        //BLOCKING CODE
        for(let i=0;i<200;i++)
        {
            for(let j=0;j<200;j++)
            {
                // j=20000;
                console.log(`${i},${j}`);
            }
        }
        res.end('Welcome to About us !!')
    }    
    else
    res.end(`<h1>Oops!!<h1>
    <p>Requested Page is not available</p>
    <a href='/'>Return Back to Home page</a>`)
    
})

server.listen(5000,()=>{
    console.log("Listening the server at 5000 ");
})