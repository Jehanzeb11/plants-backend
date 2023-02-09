const express = require("express")
const router = express.Router()
// const CryptoJS = require("crypto-js")
// const jwt = require("jsonwebtoken")

// const User = require("../model/UserModel")
const { register, login } = require("../controllers/userController")


/// register user


router.post("/register",register )

router.post("/login",login )

module.exports = router