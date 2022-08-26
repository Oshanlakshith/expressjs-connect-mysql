const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("Item get All")
})

router.post('/',(req,res)=>{
    res.send("Item Post")
    console.log(req.body)
})
module.exports=router
