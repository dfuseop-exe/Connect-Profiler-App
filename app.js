const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT || 3000 ;

// secure Db link config functions takes key value pair path : pathaddress
dotenv.config({path : './config.env'});
const DB = process.env.DATABASE_URL;

mongoose.connect(DB).then(()=>{
    console.log("Connection is successful")  
}).catch((err)=>{
    console.log(err)
});

//middleware 

const middleware = (req , res , next)=>{
    console.log("this is middle ware");
    next();
}


app.get('/' ,(req , res)=>{
    res.send("Hello World") 
})

app.get('/about' , middleware ,  (req , res)=>{
    res.send("This is about Page")
})

app.listen(port ,()=>{
    console.log(`Listening on port ${port}`);
})

