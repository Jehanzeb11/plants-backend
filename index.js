const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const AuthRoute = require("./routes/userRoute")
const ProductRoute = require("./routes/ProductRoute")
const cors = require("cors")


dotenv.config()


const app = express()


app.use(express.json())

app.use(cors())
const PORT = process.env.PORT || 5050






app.use("/api/auth",AuthRoute)
app.use("/api/products",ProductRoute)




mongoose.connect(process.env.mongoUri).then(()=>{
    console.log('mongoDb connected')
}).catch((err)=>{
    console.log(err)
    })
    

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})