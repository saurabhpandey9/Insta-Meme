const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = mongoose.model("User")
const {JWT_SEC_KEY} = require('../api_keys/keys')
const jwt = require('jsonwebtoken')

const requireLogin = require('../middleware/requireLogin')

router.post('/signup',(req,res)=>{

    const { name, email , password} = req.body

    if(!name || !email || !password ){
        return res.status(422).json({err:"Please fill all the details!"})
    }

    User.findOne({email:email})
    .then(savedUser=>{
        if(savedUser){
            return res.status(422).json({err:"User already exist"})
        }

        bcrypt.hash(password,12) // 12 round of salting
        .then(hashpassword=>{

            const user = new User({
                email,
                password:hashpassword,
                name
            })
    
            user.save()
            .then(save=>{
                if(save){
                    return res.json({msg: "Credential saved successfully"})
                }
            })
            .catch(err=>{
                console.log(err)
            })

        })

        
    }).catch(err=>{
        console.log(err)
    })
    
})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body

    if(!email || !password){
        return res.status(422).json({err:"Please enter all the credentials!!"})
    }

    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({err:"Invalid email or password"})
        }
        else{

            bcrypt.compare(password,savedUser.password)
            .then(passcomp=>{
                if(!passcomp){
                    return res.status(422).json({err:"Invalid email or password"})
                }
                else{

                    // return res.json({msg: "User authenticated successfully"})
                    console.log(savedUser)
                    const token = jwt.sign({_id:savedUser._id},JWT_SEC_KEY)

                    return res.json({token})

                }
            }).catch(err=>{
                console.log("passmatch: ",err)
            })
        }
    }).catch(err=>{
        console.log("Email Find Error :",err)
    })
})

router.get('/protected',requireLogin,(req,res)=>{
    // console.log(req.user)
    res.send(req.user)
})

module.exports = router