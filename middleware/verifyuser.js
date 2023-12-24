const jwt=require('jsonwebtoken');

const verifyUser=(req,res,next)=>{
    const token=req.header.authorization
    if(token){
        // 403 error code valid credentials but not authorization
        jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
            if(err) res.status(403).json('Invalid Token');
            req.user=user;
            next()
            
        })
    }
}

module.exports=verifyUser;