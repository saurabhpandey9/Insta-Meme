const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')

const Post = mongoose.model("Post")

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body,url} = req.body

    if(!title || !body){
        return res.status(422).json({err:"Please fill all the fields!!"})
    }

    const post = new Post({
        title,
        body,
        url,
        postedBy:req.user
    })

    post.save()
    .then(msg=>{
        if(msg){
            console.log(msg)
            return res.json({msg:"data saved successfully"})
        }
    })
    .catch(err=>{
        console.log("error",err)
    })


})

router.get('/allpost',(req,res)=>{
    Post.find()
    .populate("postedBy","name email")
    .then(allpost=>{
        return res.json({allpost})
    }).catch(err=>{
        console.log(err)
    })
})


router.get('/mypost',requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .then(mypost=>{
        return res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router