const http =require('http');
const {readFileSync}=require('fs');

const loginpage=readFileSync('./index.html')
const logincss=readFileSync('./styles.css')

const server = http.createServer((req,res)=>{
    // console.log("User hits the server!!");
    // res.end("Homepage")
    const url=req.url;
    if(url==='/')
    {
    res.writeHead(200,{'content-type':'text/html'})
    res.write(loginpage)
    res.end();
    }
    else if(url==='/about')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About us Page</h1>')
        res.end()
    }
    else if(url=='/styles.css')
    {
        res.writeHead(200,{'content-type':'text/css'})
        res.end(logincss);
    }
    else
    {
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>Page Not Found</h1>')
        res.end()

    }
    
    
})
server.listen(5000);