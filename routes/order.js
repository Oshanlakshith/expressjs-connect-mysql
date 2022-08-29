const express=require('express')
const router=express.Router()
const mysql=require('mysql')
const db=require('../configs/db.config')


const connection=mysql.createConnection(db.database)

connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        var ordertableqQuery="CREATE TABLE IF NOT EXISTS `Order`(oid VARCHAR(255),cid VARCHAR(255),qty VARCHAR(255),date VARCHAR(255))"
        connection.query(ordertableqQuery,function(err,result){
            console.log("Connect Database")
        console.log("order table Created")
        })
    }
})

router.get('/',(req,res)=>{
    var query="SELECT*FROM `order`";
    connection.query(query,function(err,row){
        if(err){
            res.send("No order")
        }else{
            res.send(row)
        }
    });

})


router.post('/',(req,res)=>{
    const oid=req.body.oid
    const cid=req.body.cid
    const qty=req.body.qty
    const date=req.body.date

    var query="INSERT INTO `order` (oid,cid,qty,date)VALUES(?,?,?,?)";

    connection.query(query,[oid,cid,qty,date],(err)=>{
        if(err){
            res.send("order Already Saved");
        }else{
            res.send("order saved")
        }
    })

    console.log(req.body)
})


router.put('/',(req,res)=>{
    const oid=req.body.oid
    const cid=req.body.cid
    const qty=req.body.qty
    const date=req.body.date

    var query="UPDATE `order` SET cid=?,qty=?,date=? WHERE oid=?";

    connection.query(query,[cid, qty , date,oid],(err,row)=>{
            if (err)throw err;
                res.send(row)
    })
})

router.get('/:oid',(req,res)=>{
    const oid=req.params.oid
    var query="SELECT *FROM `order` WHERE oid=?"
    connection.query(query,[oid],(err,row)=>{
        if(err){
            res.send("No User")
        }else{
            res.send(row)
        }
    });
})
module.exports=router