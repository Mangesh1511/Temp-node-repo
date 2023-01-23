const express=require('express');
const app = express()

app.get('/',(req,res)=>{
    console.log('user hits the resources');
    res.status(200).send('Homepage')
})
app.get('/about',(req,res)=>{
    console.log('user hits the about us page')
    res.status(200).send('About page')
})
app.all('*',(req,res)=>{
    res.status(404).send("<h3>Resource Not Found</h3>");
    
})
app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})