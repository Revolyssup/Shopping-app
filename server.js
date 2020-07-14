const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const app=express()

//setting up database
require('./db/db')
const PORT= process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//Routes
app.use("/api/products",require('./routes/route'))
app.use("/api/orders",require('./routes/route'))


//production
    // app.use(express.static('.client/build'));
    // app.get('*', (req, res) => {
    //     res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    //   }); 
    // }

app.listen(PORT,()=>{
        console.log(`Server Started on port ${PORT}`)
})