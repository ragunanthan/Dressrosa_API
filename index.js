const express = require('express');
const log = require('./logger');
const app = express();

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended : true })); //?key=value&key=value
app.use(express.static('pulic')); //to store local assests
app.use(log);

console.log(`Node_env ${process.env.NODE_ENV}`);

app.get('/api', (req, res) => {
  res.send('Hello World!')
})



 

// port that listening 
const port = process.env.PORT || 3000; 
app.listen(port, () =>   console.log(`Example app listening on port ${port}`))          