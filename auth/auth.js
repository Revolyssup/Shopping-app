const jwt = require("jsonwebtoken")

const Authorization=(req,res,next)=>{
    const token=req.headers["x-token"]
    if(token==null) res.sendStatus(403)
    else{
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
            if(err) return res.sendStatus(403)
            req.verify=user
            next()
        })
    }
   
    
}
module.exports=Authorization