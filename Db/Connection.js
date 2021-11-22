const mongoose = require('mongoose');
const dotenv = require('dotenv');

// secure Db link config functions takes key value pair path : pathaddress
dotenv.config({path : './config.env'});
const DB = 'mongodb+srv://sushantshinde:sush2418@cluster0.udugd.mongodb.net/test'

mongoose.connect(DB).then(()=>{
    console.log("Connection is successful");
}).catch((err)=>{
    console.log('MongoDB event error: ' + err);
});
 
