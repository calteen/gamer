require("dotenv").config()
const express = require("express");
const app = express();








app.use(express.json())
app.use(express.static('public'))
app.use(express.static('public'))
app.set('view engine', 'ejs');









//cors
const cors = require("cors");
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));



















app.get("/", (req, res)=>{
res.json({success: true     });
})

module.exports = app