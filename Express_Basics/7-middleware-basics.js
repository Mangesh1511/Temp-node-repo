const express=require('express')
const app = express()

const logger=(req,res,next)=>{

    console.log('logger function\n');
    const method=req.method
    const url=req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    next()

}
app.get('/',logger,(req,res)=>{
   
    res.send('Homepage');
})

app.get('/about',logger,(req,res)=>{
    res.send('About Page')
})
app.listen(5000,()=>{
    console.log("Server is listening at port 5000...");
})