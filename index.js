const express = require('express');
const helmet = require('helmet');
var morgan = require('morgan');
const log = require('./logger');
const app = express();

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended : true }));  //urlencoded encoded values like '?key=value&key=value'
app.use(express.static('pulic')); //to store local assests
app.use(helmet()); //helmet helps to add addition header in http request for security
app.use(log); //custom logger function to logging data

// use only in development 
if(app.get('env') === 'development'){
  app.use(morgan('tiny')); //HTTP request logger middleware 
}





app.get('/api', (req, res) => {
  res.send(`Node_env ${process.env.NODE_ENV} ${app.get('env')}`)
})



 

// port that listening 
const port = process.env.PORT || 3000; 
app.listen(port, () =>   console.log(`Example app listening on port ${port}`))          