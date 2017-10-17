var express = require('express');
var app = express();
var route = require('./route.js');


app.use('/', route);

app.listen(3000);