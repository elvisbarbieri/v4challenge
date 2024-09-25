require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const FoodRoute = require("./routes/FoodRoute")

// Middleware for parsing JSON
app.use(express.json());
app.use(cors())
let foodRoute = new FoodRoute(app);

//connectDB
const connectDB = require("./db/connect")
app.route(foodRoute.getRoutes())

const start = async() =>{

    try{

        await connectDB(process.env.MONGO_URI)
        app.listen(3000,(req,res)=>{

            console.log("THis app is fucking running on port 3000");
        })

    }
    catch(error){
        console.log(error)
    }
}

start()
