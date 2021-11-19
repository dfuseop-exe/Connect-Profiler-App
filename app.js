const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;

//db connection
require('./Db/Connection')

//middleware for app to use json
app.use(express.json())

//router files  
app.use(require('./router/auth'));

app.listen(port ,()=>{
    console.log(`Listening on port ${port}`);
})

