const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require("./routes/userRouter")
mongoose.connect('mongodb+srv://davidsam:samuel123@cluster0.3m7vwrt.mongodb.net/?appName=Cluster0').then(()=>{
    console.log("Data base connected successfully")
}).catch((err)=>{
    console.log("Error while connecting the database",err)
})
const app = express()
app.use(express.json())
app.use(cors())
app.use('/',userRouter)
app.listen(5000)