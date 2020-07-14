const express=require('express')
const router=express.Router();
const Products=require('../models/model')
const Orders=require('../models/order')
router.get('/', async (req,res)=>{
    const products= await Products.find({});
    res.json({products});
})

router.post('/',async (req,res)=>{
    const order=new Orders(req.body)
    order.save((err,data)=>{
        if(err) return console.log(err)
        console.log("Order came from ",data.name)
    })
})
module.exports=router; 