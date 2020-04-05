var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("Olá felipe! Nodemon e MongoDB ok!");
  console.log("app.get '/' ");
});

app.get('/api', function(req, res){
  res.send("Olá felipe! API ok!");
  console.log("app.get '/api' ");
});

app.get('/site1', function(req, res){
  res.send("Olá felipe! SITE1 OK!");
  console.log("app.get '/site1' ");
});

app.get('/site2', function(req, res){
  res.send("Olá felipe! SITE2 OK!");
  console.log("app.get '/site2' ");
});

app.listen(3000, function(){
  console.log('app escutando na porta 3000!');
});

