const express=require('express')
const app =express()
const products=require('./data')

app.get('/',(req,res)=>{

    res.status(200).json(products);
})


app.listen(5000,()=>{
    console.log('Server is Listening at port 5000...');
})