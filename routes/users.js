const express=require('express')
const router=express.Router()
const mysql = require('mysql')
const db=require('../configs/db.config')


const connection = mysql.createConnection(db.database)

connection.connect(function(err){
    if(err){
        console.log(err)
    }else{
        var  usertableQuery="CREATE TABLE IF NOT EXISTS User(id VARCHAR(255),name VARCHAR(255),address VARCHAR(255),salary VARCHAR(255))";
        connection.query(usertableQuery,function(err,result){
            console.log("Connect Database")
        console.log("User table Created")
        })
    }
})

router.get('/',(req,res)=>{
    var query="SELECT*FROM User";
    connection.query(query,function(err,row){
        if(err){
            res.send("No customers")
        }else{
            res.send(row)
        }
    });

})


router.post('/',(req,res)=>{
    const id=req.body.id
    const name=req.body.name
    const address=req.body.address
    const salary=req.body.salary

    var query="INSERT INTO user (id,name,address,salary)VALUES(?,?,?,?)";

    connection.query(query,[id,name,address,salary],(err)=>{
        if(err){
            res.send("Customer Already Saved");
        }else{
            res.send("Customer saved")
        }
    })

    console.log(req.body)
})


router.put('/',(req,res)=>{
    const id=req.body.id
    const name=req.body.name
    const address=req.body.address
    const salary=req.body.salary

    var query="UPDATE User SET name=?,address=?,salary=? WHERE id=?";

    connection.query(query,[name, address , salary,id],(err,row)=>{
            if (err)throw err;
                res.send(row)
        
    })
})

router.delete('/:id',(req,res)=>{
    const id=req.params.id
    var query="DELETE FROM user WHERE id=?";
    connection.query(query,[id],(err,rows)=>{
        res.send("Deleted User :" +id)

    })
})

router.get('/:id',(req,res)=>{
    const id=req.params.id
    var query="SELECT *FROM user WHERE id=?"
    connection.query(query,[id],(err,row)=>{
        if(err){
            res.send("No User")
        }else{
            res.send(row)
        }
    });
})
module.exports=router