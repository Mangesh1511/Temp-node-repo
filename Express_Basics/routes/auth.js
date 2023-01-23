const express=require('express')
const router=express.Router()

router.post('/',(req,res)=>{
    const {name}=req.body;
    if(name)
    {
       return  res.status(200).send(`Welcome ${name} !!`);
    }

    return res.status(401).send(`<h4>Please Provide Credentials</h4>`)
})

module.exports=router
