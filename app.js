const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;


app.get('/' ,(req , res)=>{
    res.send("Hello World")
})

app.get('/about' , (req , res)=>{
    res.send("This is about Page")
})

app.listen(port ,()=>{
    console.log(`Listening on port ${port}`);
})

