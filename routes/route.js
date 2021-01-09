require('dotenv').config()
const express=require('express')
const router=express.Router();
const app=express()
const path=require('path')
const Products=require('../models/model')
const Users=require('../models/user')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')


//To populate redux store with products
router.get('/api/products', async (req,res)=>{
    const products= await Products.find({});
    res.json({products});
})

//To save new orders on database
router.post('/api/orders',async (req,res)=>{
   
    const _id=req.verify._id;
    console.log(_id);
    Users.findOneAndUpdate(_id,req.body,(err,docs)=>{
        if(err) console.log(err)
        else console.log("updated user:",docs)
    })
  
})
 
router.post('/auth/signup',async (req,res)=>{
    let name=req.body.name
    let email=req.body.email
    let address=req.body.phone
    let phone=req.body.phone
    let pass=req.body.password
    bcrypt.hash(pass,10,(err,hash)=>{
        
   const toSave={'name':name,'email':email,'address':address,'phone':phone,'password':hash,'orders':[]}
   const user=new Users(toSave)
   user.save((err,data)=>{
       if(err) console.log(err)
       const accessToken=jwt.sign({'_id':data._id},process.env.ACCESS_TOKEN_SECRET)
       res.send({...toSave,  accessToken: accessToken })
       })
  
    })
})

router.post('/auth/login',async (req,res)=>{
    let name=req.body.name
    let password=req.body.password

    const user=await Users.findOne({name:name})
    if(!user) res.sendStatus(403)
    if(bcrypt.compareSync(password, user.password)){
        const accessToken=jwt.sign({'_id':user._id},process.env.ACCESS_TOKEN_SECRET)
        res.send({...user,  accessToken: accessToken })
    }else{
        res.sendStatus(403)
    }
})
    






//serving react build in production
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '..','client','build' ,'index.html'))
   });
 


module.exports=router;  