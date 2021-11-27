const express = require('express');
var cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser());
const port = 3000 ;
const mongoose = require("mongoose");

//db connection
require('./Db/Connection')

//middleware for app to use json
app.use(express.json())

//router files  
app.use(require('./router/auth'));

app.listen(port ,()=>{
    console.log(`Listening on port ${port}`);
})

