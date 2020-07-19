const express=require('express')
const router=express.Router();
const path=require('path')
const Products=require('../models/model')
const Orders=require('../models/order')




router.get('/api/products', async (req,res)=>{
    const products= await Products.find({});
    res.json({products});
})

router.post('/api/orders',async (req,res)=>{
    const order=new Orders(req.body)
    order.save((err,data)=>{
        if(err) return console.log(err)
        console.log("Order came from ",data.name)
    })
})

//serving react build in production
router.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '..','client','build'));
  });

module.exports=router;  