const express=require('express');
const path=require('path');
const app=express()

//setup static and middleware
app.use(express.static('./navbar_app'));
// app.get('/',(req,res)=>{
//      res.sendFile(path.resolve(__dirname,'./navbar_app/index.html'));
//  adding to static assets
//  SSR-->Server Side Rendering
// })
app.get('*',(req,res)=>{
    
    res.status(400).send( `<h2>Resource Not Found <h2>`);
})
app.listen(5000,()=>{
    console.log("Server is running at port 5000");
})
