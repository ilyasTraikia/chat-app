const mongoose = require('mongoose')



let userSchema = new mongoose.Schema({

    username: {type:String,required:true},

    email: {type:String,required:true},

    password: {type:String,required:true},

    creationDate: {type:Date,default:Date.now()}

    
})














module.exports = mongoose.model('User',userSchema)