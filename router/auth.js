const express = require('express');
const router = express.Router();

router.get('/' ,(req , res)=>{
    res.send("Hello World from router") 
})

router.post('/register' ,(req , res)=>{
    res.json({message : req.body})
    console.log(req.body)
})

module.exports = router;