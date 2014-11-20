// first lesson of node js => creattting a server

/*
var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('Hello!');
}).listen(1337,'127.0.0.1');
console.log('Webserver has started');
*/


// this variable requiere the http module to bring the module and use it
		//var http = require('http');

/* here we using the module http and creating a webserver
*  this is a method which call take a self calling function
*  with 2 parametter request and respond
*/
		//http.createServer(function(req,res){

/* here we whrtting a head to our document this can be html or anything else
*  wrtiieHead function can take options 
*  200 means a good connection/ normal request with no error
*  you can specied the document type
*/
		//res.writeHead(200,{'content-type':'text/plain'});

/*
 * we can send some information with .end method
*/
		//res.end('hello');
		//}).listen(1337, '127.0.0.1');
		//console.log('webserver has started');

/* listen is to tell which port and whcih ip address
*  to look at
*  127.0.0.1 is your local
*/


var http = require('http');
// requiere the file system module => module name =fs
var fs = require('fs');


http.createServer(function(req,res){

	//using the read file method of the fs module
	// readFile can take two parameter: 1/ the file name, 2/call back function
	fs.readFile('index.html' ,function(err,data){
		//this is asynchronous 
		res.writeHead(200,{'Content-type':'text/html'});
		res.end(data);
	});
}).listen(1337,'127.0.0.1');
console.log('Webserver has started');



