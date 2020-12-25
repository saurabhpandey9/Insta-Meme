const  mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const PostShema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    like:[{
        type:ObjectId,
        ref:"User"
    }],
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})

mongoose.model("Post",PostShema)