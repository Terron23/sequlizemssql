var express = require('express');
var app = express();

//First middleware before response is sent.
//When you got to the server
app.use(function(req, res, next){
   console.log("Start" +' '+Date.now());
   next();
});

//Route handler Prints what I want to be seen on the wepage
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
});

app.use('/', function(req, res){
   console.log('End' +' '+ Date.now());
});

app.listen(3000);