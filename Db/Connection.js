const mongoose = require('mongoose');
const dotenv = require('dotenv');

// secure Db link config functions takes key value pair path : pathaddress
dotenv.config({path : './config.env'});
const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("Connection is successful");
}).catch((err)=>{
    console.log('MongoDB event error: ' + err);
});
 
 