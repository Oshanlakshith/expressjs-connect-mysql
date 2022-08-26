const express=require('express')
const router=express.Router()
const Item=require('../models/item.models')


router.get('/',async(req,res)=>{
    try {
        const item=await Item.find()
       // res.send(item)
       res.json(item)
    } catch (error) {
        res.send("Err"+error)
    }
    res.send("Item get All")
})

router.post('/',(req,res)=>{
    const item=new Item({
        code: req.body.code,
        description: req.body.description,
        price: req.body.price,
        qty: req.body.qty
    })
    try {
       const response=item.save()
       //res.send(response)
       res.json(response)
    } catch (error) {
        res.send(error)
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        const item=await Item.findById(req.params.id)
        const response=await item.remove()
        res.json(response)
    } catch (error) {
        res.send(error)
    }

})

router.put('/:id',async(req,res)=>{
    try {
        const item=await Item.findById(req.params.id)
        item.code=req.body.code
        item.description= req.body.description,
        item. price= req.body.price,
        item. qty= req.body.qty

        const response=await item.save()
        res.json(response)
        
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id',async(req,res)=>{
    try {
       const item=await Item.findById(req.params.id)
       res.json(item)
    } catch (error) {
        res.send("ERR "+err)
    }

})
module.exports=router
