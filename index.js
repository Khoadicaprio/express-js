var express = require ('express');
var app = express();
var port = 3000;

app.get('/', function (request, response)
{
	response.send ('khoa dep trai')
})

app.listen (port, function(){
	console.log('example app listening on port' + port)
})