const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('customer get')
})

router.post('/',(req,res)=>{
res.send('CustomerPost')
})

module.exports=router