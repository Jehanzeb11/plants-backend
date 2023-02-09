const express = require("express")
const router = express.Router()
const User = require("../model/UserModel")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")




const register = async (req,res)=>{


    const newUser = new User({
        username: req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.secret).toString()
})


try {
    const savedUser = await newUser.save()
res.status(201).json(savedUser)


} catch (error) {
    res.status(500).json(error)

}


}





// login 


const login = async (req,res)=>{

    try {
       const user = await User.findOne({email:req.body.email})
    
    
       !user && res.status(401).json({message:"user does not exist"})
    
       const hashPassword = CryptoJS.AES.decrypt(user.password,process.env.secret)
    
       const Originalpassword = hashPassword.toString(CryptoJS.enc.Utf8)
       
       Originalpassword !== req.body.password && res.status(401).json({message:"wrong Credentials"})


       const accessToken = jwt.sign(
        {
        id:user._id
       },
       process.env.jwtSercet,
       {expiresIn:"30d"}
    
       
       )


       const {password , ...others} = user._doc
    
       res.status(200).json({...others,accessToken})
    
    } catch (error) {
        res.status(500).json(error)
    
    }
    
    
    }



module.exports = {register,login}