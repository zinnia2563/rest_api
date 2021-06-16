const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/Db");
const userRoutes = require("./Routes/UserRoute")
dotenv.config();
connectDB()
app.use(express.json());
app.use(cors());

// app.get("/",(req,res) =>{
//     res.send("ok");
// })
app.use("/users", userRoutes);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`app is runnig on ${port}`);
    
})