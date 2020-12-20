const express= require('express')
const server = express()
const mongoose = require('mongoose')
require('dotenv/config')

const {MONGOURI} = require('./api_keys/keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("DB Connected!")
})
mongoose.connection.on('error',(err)=>{
    console.log("error msg: ",err)
})



// model
require('./models/user')
require('./models/post')

// Routes
server.use(express.json())
server.use(require('./routes/auth'))
server.use(require('./routes/post'))



server.get('/home',(req,res)=>{
    console.log("Home")
    res.send("Hello world")
})





server.listen(process.env.PORT,()=>{
    console.log("Server is running on ",process.env.PORT)
})