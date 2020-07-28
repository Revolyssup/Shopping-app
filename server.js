const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const Authorization=require('./auth/auth')
const app=express()

app.use("/api",Authorization)
//setting up database
require('./db/db')
const PORT= process.env.PORT || 3000

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:false}))


app.use(express.static('client/build'))
//Routes
app.use("/",require('./routes/route'))




app.listen(PORT,()=>{
        console.log(`Server Started on port ${PORT}`) 
})