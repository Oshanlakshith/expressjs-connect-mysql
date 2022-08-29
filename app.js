const express = require('express')
const mongoose=require('mongoose')
const app = express()
const customer=require('./routes/customer')
const item=require('./routes/item')
const order=require('./routes/order')
const port = 4000

app.use(express.json())

const url='mongodb://localhost/express'
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on("open",()=>{
  console.log("Mongodb Connected");
})
app.use('/customer',customer)
app.use('/item',item)
app.use('/order',order)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})