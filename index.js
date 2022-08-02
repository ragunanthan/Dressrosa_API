const express = require('express');
const log = require('./middleware/logger');
const helmet = require('helmet');
var morgan = require('morgan');
const config = require('config');
var cors = require('cors');
var startupDebug = require('debug')('app:startup');
const app = express();
const homeRoute = require("./routes/home");

// middleware functions
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));  //urlencoded encoded values like '?key=value&key=value'
app.use(express.static('pulic')); //to store local assests
app.use(helmet()); //helmet helps to add addition header in http request for security

// use only in development 
if(app.get('env') === 'development'){
  app.use(morgan('tiny')); //HTTP request logger middleware 
  app.use(log); //custom logger function to logging data
}

// configuration



// routers
app.use("/api", homeRoute);


// mongo db intergration

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ragunanthan:6PTA9GpNzhAwvGnN@cluster0.og5gv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect().then(res => {
  console.log({res});
}).catch(err => {
  console.log({err});
});


startupDebug('app started');

// port that listening 
const port = process.env.PORT || 3000; 
app.listen(port, () =>   console.log(`Example app listening on port ${port}`))          