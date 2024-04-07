const express=require("express");
const dotenv=require("dotenv");
dotenv.config();
const mongoose=require('mongoose');


const app=express();

  
mongoose.connect('mongodb://0.0.0.0:27017')
.then(()=>console.log("Connected"),(err)=>console.log(`Error:${err.message}`));





app.listen(process.env.PORT,()=>console.log(`Server listening on ${process.env.PORT}`));


