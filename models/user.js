const db=require('mongoose')

const Schema=db.Schema

const orderSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:String
    },
    orders:{
        type:Array
    },
    password:{
        type:String,
        required:true
    }
})


module.exports=db.model('users',orderSchema)