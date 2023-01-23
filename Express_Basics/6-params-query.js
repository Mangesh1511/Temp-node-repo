const express=require('express');
const app=express()
const {products}=require('./data');

app.get('/',(req,res)=>{

    res.send(`<h1>Home Page</h1><a href="/api/products">products</a>`);
})

app.get('/api/products',(req,res)=>{
    const newProducts=products.map((product)=>{
        const {id,name,image}=product;
        return {id,name,image}
    })
    res.send(newProducts);
})
//instead of givig ids to find the element in the table route params are usd
app.get('/api/products/:ProductId',(req,res)=>{
    
    const {ProductId}=req.params
    const singleProduct=products.find((products)=>products.id===Number(ProductId))
    if(!singleProduct)
    {
        return res.status(404).send("No Product exists with the given product_id")
    }
    
    return res.json(singleProduct)
    
    
    // const singleProduct=products.find((products)=>products.id==1)
    // res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
   
    console.log(req.params);
     res.send("Hello World");  

})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    const {search,limit}=req.query
    let sortedProducts=[...products]

    if(search)
    {
        sortedProducts=sortedProducts.filter((products)=>{return products.name.startsWith(search)
        })
    }
    if(limit)
    {
        sortedProducts=sortedProducts.slice(0,Math.min(sortedProducts.length,Number(limit)))
    }
    if(sortedProducts.length<1)
    {
        // return res.status(200).send('No Products Matched the search parameters come back again!!');
            return res.status(200).json({success:true,})
    }
    res.status(200).json(sortedProducts);

    res.send('Hello world')
})


app.listen(5000,()=>{
    console.log('Server is listening on port 5000');
})