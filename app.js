const express= require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");

//settings
const app = express();
const port = process.env.port || 3000;

//middlewares
app.use(express.json());
app.use("/api",userRoute);

//routes
app.get("/", (req, res) =>{
    res.send("welcome to my API");
});

//mongo connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

//server listening
app.listen(port, () => console.log("Server listening to", port)); 