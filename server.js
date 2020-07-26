const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const app=express()

//setting up database
require('./db/db')
const PORT= process.env.PORT || 5000

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:false}))


app.use(express.static('client/build'))

//Routes
app.use("/",require('./routes/route'))




app.listen(PORT,()=>{
        console.log(`Server Started on port ${PORT}`) 
})