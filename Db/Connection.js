const mongoose = require('mongoose');
const dotenv = require('dotenv');

// secure Db link config functions takes key value pair path : pathaddress
dotenv.config({path : './config.env'});
const DB = process.env.DATABASE_URL;

mongoose.connect(DB).then(()=>{
    console.log("Connection is successful");
}).catch((err)=>{
    console.log('Something went wrong In DB Connetion');
});