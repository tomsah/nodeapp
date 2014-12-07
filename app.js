var express = require('express');

var app = express();

app.get('/', function(req,res){

	res.render('index.ejs', {title:'hello form the command line'});

});

app.get('/about', function(req,res){

	res.render('layout.ejs', {title:'About-us2222', body : '<h1>about us page </h1>'});

});



app.get('/*', function(req,res){
	res.status(404).render('error.ejs', {title: 'error!'});
});



console.log('the server is started on localhost:3000');

app.listen(3000);