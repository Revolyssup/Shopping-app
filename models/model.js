const db=require('mongoose')

const Schema=db.Schema

const productSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
})

module.exports=db.model('products',productSchema)