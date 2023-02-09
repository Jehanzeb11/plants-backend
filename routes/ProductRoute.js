const express = require("express")
const { postProducts, getSingleProduct, getAllProducts } = require("../controllers/productController")
const router = express.Router()


router.post("/", postProducts)
router.get("/find/:id", getSingleProduct)
router.get("/", getAllProducts)



module.exports = router
