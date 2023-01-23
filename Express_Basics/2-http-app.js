const http =require('http');
const {readFileSync, read}=require('fs');

const homepage=readFileSync('./Express_Basics/navbar_app/index.html')
const homecss=readFileSync('./Express_Basics/navbar_app/style.css')
const browsejs=readFileSync('./Express_Basics/navbar_app/browser-app.js')
const logo =readFileSync('./Express_Basics/navbar_app/logo.svg')

const server = http.createServer((req,res)=>{
    // console.log("User hits the server!!");
    // res.end("Homepage")
    const url=req.url;
    if(url==='/')
    {
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homepage)
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
        res.end(homecss);
    }
    else if(url=='/browser-app.js')
    {
        res.writeHead(200,{'content-type':'text/js'})
        res.end(browsejs)
    }
    else if(url==='/logo.svg')
    {
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.end(logo)
    }
    else
    {
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>Page Not Found</h1>')
        res.end()

    }
    // else res.end()    
    
})
server.listen(5000);