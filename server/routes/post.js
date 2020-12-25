const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')

const Post = mongoose.model("Post")

router.post('/createpost', requireLogin, (req, res) => {
    const { title, body, url } = req.body

    if (!title || !body) {
        return res.status(422).json({
            success: false,
            message: "Please fill all the fields!!"
        });
    }

    const post = new Post({
        title,
        body,
        url,
        postedBy: req.user
    })

    post.save()
        .then(msg => {
            if (msg) {
                console.log(msg)
                return res.json({
                    success: true,
                    message: "Post Created successfully"
                });
            }
        })
        .catch(err => {
            console.log("error", err)
        })


})

router.get('/allpost', (req, res) => {
    Post.find()
        .populate("postedBy", "name email")
        .then(allpost => {
            return res.json({
                success: true,
                message: "Success",
                allpost
            });
        }).catch(err => {
            console.log(err)
        })
})


router.get('/mypost', requireLogin, (req, res) => {
    Post.find({ postedBy: req.user._id })
        .then(mypost => {
            return res.json({
                success: true,
                message: "Success",
                mypost
            });
        })
        .catch(err => {
            return res.json({
                success: false,
                message: err,
            });
        })
})


// like dislike is added in same api

router.put('/like', requireLogin, (req, res) => {

    if (req.body.postId === undefined || req.body.postId === null) {
        return res.json({
            success: false,
            message: "postId is not found!!",
        });
    }

    Post.findById(req.body.postId)
        .then(savedPost => {

            // here if the user id is found in linkes array then will remove the like
            if (savedPost.like.includes(req.user._id)) {
                console.log(savedPost)
                Post.findByIdAndUpdate(req.body.postId, {
                    $pull: { like: req.user._id }
                }, {
                    new: true
                }).exec((err, result) => {
                    if (err) {
                        return res.json({
                            success: false,
                            message: savedPost,
                        });
                    }
                    return res.json({
                        success: true,
                        message: result
                    });
                })
            }

            // here if the user id is not found in linkes array then will include
            else {
                Post.findByIdAndUpdate(req.body.postId, {
                    $push: { like: req.user._id }
                }, {
                    new: true
                }).exec((err, result) => {
                    if (err) {
                        return res.json({
                            success: false,
                            message: err,
                        });
                    }
                    return res.json({
                        success: true,
                        message: result
                    });
                })

            }
        }).catch(err => {
            console.log(err)
        })



})


module.exports = router