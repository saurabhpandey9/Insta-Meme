module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    const jwt = require('jsonwebtoken')
    const {JWT_SEC_KEY} = require('../api_keys/keys')
    const mongoose = require('mongoose')
    const User = mongoose.model("User")

    if(!authorization){
        return res.status(401).json({
			success:false,
            message:"you must be logged In!!"
			});
    }
    
    const token = authorization.replace("Bearer ","")

    jwt.verify(token,JWT_SEC_KEY,(err,payload)=>{
        if(err){
            return res.status(401).json({
				success:false,
				message:"you must be logged In!!"
				});
        }

        const {_id} = payload
        
        User.findById(_id)
        .then(savedUser=>{
            if(!savedUser){
                return res.status(401).json({
					success:false,
					message:"you must be logged In!!"
					});
            }

            req.user = savedUser
            req.user.password = undefined // this is used to remove password 
            next()
        })
    })

}