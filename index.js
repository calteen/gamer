const express = require("express");
const app = express();

require("dotenv").config()

app.get("/", (req, res)=>{
res.json({success: true     });
})

module.exports = app