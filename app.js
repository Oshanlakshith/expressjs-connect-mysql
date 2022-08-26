const express = require('express')
const app = express()
const customer=require('./routes/customer')
const item=require('./routes/item')
const user=require('./routes/users')
const port = 4000

app.use(express.json())

app.use('/customer', customer)
app.use('/item', item)
app.use('/user',user)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})