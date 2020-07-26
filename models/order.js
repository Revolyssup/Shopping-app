const db=require('mongoose')

const Schema=db.Schema

const orderSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    orders:{
        type:Array,
        required:true
    }
})


module.exports=db.model('orders',orderSchema)