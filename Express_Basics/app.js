const express =require('express')
const app =express()
app.use(express.static('./methods-public'))
const people =require('./routes/people');
const login=require('./routes/auth')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api/people',people)
app.use('/login',login)


app.listen(5000,()=>{
    console.log('Server is listening at port 5000..');
})