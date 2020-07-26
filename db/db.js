require('dotenv').config()
const db=require('mongoose')

const URI=process.env.URI
console.log(process.env.URI)
//connection 
db.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});

//Validation
db.connection
    .on('open',()=>{console.log('Connected to mongodb Database')})
    .on('error',err=>{console.info('Create a database.')})