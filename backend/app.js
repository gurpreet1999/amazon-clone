const express=require("express")
const app=express()
const cookieParser=require("cookie-parser")
const errorMiddleware=require("./middleware/error.js")
const productRouter = require("./routes/productRoute")
const userRouter = require("./routes/userRoute")
const orderRouter = require("./routes/orderRoute")
const paymentRouter = require("./routes/paymentRoute")


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({
    extended:true
}))







app.use("/api/v1/",productRouter)
app.use("/api/v1/",userRouter)
app.use("/api/v1/",orderRouter)
app.use("/api/v1/",paymentRouter)

app.use(errorMiddleware)


module.exports=app