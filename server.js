var express = require('express');
var app = express();
var session = require('express-session');
var fs = require("fs")

app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var server = app.listen(3000, function(){
 console.log("http://192.168.12.66:3000/home");
});

var router = require('./router/main')(app, fs);