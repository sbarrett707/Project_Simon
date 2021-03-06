//Author: Rick Roberts
var mongoose = require('mongoose');
var express = require('express');
var router = require('./routes/userRouter');
var path = require('path');
var app = express();

var port = process.env.PORT || 8080;

app.use('/', router);
app.use('/public', express.static(path.join(__dirname, 'public')));

//Start the server 
//Still need to add DB connection

app.listen(port,async()=>{
  try{  await mongoose.connect('mongodb://localhost:27017/simonDB', {useUnifiedTopology: true, useNewUrlParser: true})

  }
  catch(error){console.log(error.message)}
});

console.log('Server started! At http://localhost:' + port)
