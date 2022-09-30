require('dotenv').config()
const UserModel = require('../models/User')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')


exports.login =  async (req,res,next) => {

    // find the corresponding user in the database
    // according to the entered email 
    const user = await UserModel.findOne({email:req.body.email})
    // Check if the user is found and do a condition on it
    if(user == null) {
      res.status(401).send('User not found')
    } else {
      // the user is found now check if the password is correct
     const match = await  bcrypt.compare(req.body.password,user.password) 
     if(!match) {
       res.status(401).send('Icorrect password')
     } else {
      // User authentificated 
      // send a token using jwt library
      const accessToken = jwt.sign({userId: user._id},process.env.APP_SECRET_TOKEN,{ expiresIn: '1h' })
      res.status(200).json({acessToken:accessToken})







      
     }
    }
    




    

}






















exports.register = async (req,res,next) => {

 try {

  // hash the password  
   let userPassword = req.body.password
   let hashedPassword = await bcrypt.hash(userPassword,10)

  // get the user object from the client request
   var userReq = {username:req.body.username,email:req.body.email,password:hashedPassword}

  // store the user in the database
  const user = new UserModel(userReq)
  console.log(userReq)
  user.save().then(()=>{console.log("user saved in the database")
  res.status(201).send()}).catch((err)=> {console.log(err)})


 } catch(err) {
  res.status(500).send();
  console.log(err);

 }




}


