const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const appid=process.env.ID
const Authorization=require('./auth/auth')
const app=express()
const jwt=require("jsonwebtoken")

app.get("/check",(req,res)=>{
        const token=req.headers["x-token"]
        console.log(token)
        if(token==null) res.sendStatus(403)
        else{
            jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
                if(err) return res.sendStatus(403)
                req.verify=user
                res.sendStatus(200)
            })
        }
        
})
app.use("/api",Authorization)
//setting up database
require('./db/db')

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:false}))


app.use(express.static('client/build'))
//Routes
app.use("/",require('./routes/route'))




app.listen(appid,()=>{
        console.log(`Server Started at ${appid}`) 
})