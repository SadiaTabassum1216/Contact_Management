const express=require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDB = require("./config/dbConnection");
const dotenv= require("dotenv").config();
const app=express();
// const port=5555;

const port=process.env.PORT || 5555;

// app.get(we could write function here too)

connectDB();
app.use(express.json());    //middleware to parse the datastream
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, ()=>{
    console.log('server is running on port ',port);
})