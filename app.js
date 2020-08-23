//Import Mongoose to connect with mongoDB and config for default configurations
const mongoose = require('mongoose');
const config = require('./config.json');


//connect to mongoDB local
mongodb://SummaryDatabaseUser:OviRxprQuz0KQ@localhost:10781/?authSource=Summary-Database&readPreference=primary&appname=MongoDB%20Compass&ssl=false
mongoose.connect(
  'mongodb://' + config.db.user + ':' + config.db.pass+'@' + config.db.host + '/' + config.db.name,
  { useNewUrlParser: true , useUnifiedTopology: true  } ,async function (err) {
    if (err) {
        console.log ('Unable to connect to Mongo.');
        process.exit (1);
    } else {
        console.log ('success to connect with Mongo.');
    }
  });

//Import Express and other required modules
const express = require('express'); //express framework
const bodyParser = require("body-parser"); //json body parser
const morgan = require('morgan'); //Logs


//import all routes
const summaryRoute = require('./api/routes/summaryRoute');

//add static folders (if any)
const public = express.static('./public');

//create express app
const app = express();

//set app logs, body parser
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false})) 
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set app static folders
app.use ('/public',public); 

/*<add routes to express app>*/

//Import for Checking CORS Authentication:
const CORS_Authentication= require('./api/middlewear/CORS-Authentication');

//Checking CORS Authentication:
app.use(CORS_Authentication.cors_authentication);

//API Routes
console.log("i am above route")
app.use('/summary',summaryRoute);

//In case no route found, this middlewear will set the value for error
app.use((req,res,next)=>{
     const error = new Error("Not Found");
     error.status = 404;
     next(error); 
});

app.use ((error,req,res,next)=>{
    res.status(error.status || 500);
      res.json({
          error :{
           message: error.message, 
           status: error.status
          }
      })
});

module.exports = app;
