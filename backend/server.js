import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import tiffinRouter from './routes/tiffinRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())  //whenever there is request from frontend to backend it is parsed by json
app.use(cors())          //we can access backend from any frontend

//DB connection
connectDB()

//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))        //the pic uploaded in atlas using postman is now converted to url backendURL/images/file_name_inDB
app.use("/api/tiffin",tiffinRouter)
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://1974ankita:7iHn5AoGkC9e3A6o@cluster0.3xcpu.mongodb.net/?