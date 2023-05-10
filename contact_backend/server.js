// console.log("hello")
const express=require("express");
const errorHandler = require("./middleware/errorhandler");
const dotenv= require("dotenv").config();
const app=express();
// const port=5555;

const port=process.env.PORT || 5555;

// app.get(we could write function here too)

app.use(express.json());    //middleware to parse the datastream
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, ()=>{
    console.log('server is running on port ',port);
})