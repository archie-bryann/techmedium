const express = require('express');
const app = express();

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Credentials", "true"); 
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, OPTIONS');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
     if ('OPTIONS' === req.method) {
        //respond with 200
        return res.status(200).json({});
      }
      else {
        next();
      }
});


app.use('/', express.static('public'));

module.exports = app; 