const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const userRouter = require('./routes/UserRoutes')
var bodyParser = require('body-parser')
const authMiddleware = require('./middlewares/auth')




// Connection to mongodb
mongoose.connect(process.env.MONGOOSE_CONNECTION_URL)
.then(()=>{console.log('connected at mongodb')})
.catch((e)=>{ console.log(e)})







app.use(bodyParser.json())

app.get("/",(req,res)=> {
    res.send('Hello world')
})

app.get("/onlyConnectedUsers",authMiddleware,(req,res)=> {
    res.send(`you are connected ${req.auth.userId}`)
})



app.use("/user",userRouter)
















app.listen(process.env.PORT, ()=> { console.log(`Listening on port ${process.env.PORT}`)})