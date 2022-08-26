const mongoose=require('mongoose')

const itemShema=new mongoose.Schema({
    code:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    qty:{
        type:Number,
        required:true
    }

})
module.exports=mongoose.model('Item',itemShema)