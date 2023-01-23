const express = require('express')
const app = express()
//req => middleware => res
const logger=require('./logger')
const authorize=require('./authorize')
app.use([authorize,logger])
app.get('/', (req, res) => {

    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})
app.get('/api/products',(req,res)=>{
    res.send('Products ')
})

app.get('/api/items',(req,res)=>{
    console.log(req.user)
    return res.send('Items')
})


app.listen(5000, () => {
    console.log('Server is listening at port 5000...');
})