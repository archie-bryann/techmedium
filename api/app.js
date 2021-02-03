const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();


const supportRoutes = require('./api/routes/support');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*"); // change later
    res.header("Access-Control-Allow-Credentials", "true"); 
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, OPTIONS');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
 
     if ('OPTIONS' === req.method) {
        return res.status(200).json({});
      }
      else {
        next();
      }
});

// app.get('/', (req,res,next)=>{
//     return res.status(200).json({message:"Working"})
// })

app.use('/support', supportRoutes);

app.use((req,res,next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    return res.json({
        error: {
            message:error.message
        }
    });
});

module.exports = app;           