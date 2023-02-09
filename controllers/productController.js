const express = require("express")
const router = express.Router()
const Product = require("../model//ProductModel")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")




const postProducts = async (req, res) => {
    const newProduct = new Product(req.body)
        try {
            const savedProduct = await newProduct.save()
            res.status(200).json(savedProduct)
        } catch (error) {
            res.status(500).json(error)
        }
}


const getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }

}

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find()

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }

}




module.exports={postProducts,getSingleProduct,getAllProducts}