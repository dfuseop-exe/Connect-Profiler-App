const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;


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

