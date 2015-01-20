var express = require('express');
var app = express();
var request = require('request');
var ejs = require('ejs');


var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
// var request = require('request');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

// make one for motivational quotes

app.get ('/user', function(req, res){
	res.render('index.ejs');
})

app.get ('/', function(req, res){

	var quotes = {
		quote: [{
			"text": 'Sometimes I feel like giving up, then I remember I have a lot of motherfuckers to prove wrong',
			"author": 'Anonymous',},
		{
			"text": 'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway',
			"author": 'Earl Nightingale',},
		{
			"text": "it's not the daily increase, but the daily decrease. Hack away at the unessentials.",
			"author": 'Bruce Lee'}]
	};
	
	var random = Math.floor(Math.random() * quotes.length)

	res.send(quotes[random]);
});

app.post('/', function(req, res){
	var data = req.body.quotes[random];
	

});

app.listen(3000);

function sendQuote(){
    var movie_url = encodeURI(movie)
    var url = "http://omdbapi.com/?t=" + movie_url
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener('load', function(e) {
        var d = xhr.responseText
        var parsed = JSON.parse(d)

    })
    xhr.open("GET", url);
    xhr.send();
}
// app.get('/motivate', function(req, res){
// 	res.render('index.ejs', {name: quotes[random]});
// });



// var express = require('express')
// var app = express();
// var fs = require('fs');
// //requireing ejs makes express able to use ejs
// var ejs = require('ejs');

// arr = [];

// app.get('/', function(req, res){
	
// 	//grabs whatever is in the input box because of "name"
// 	name = req.query.name;

// 	//checks to make sure the input box is not empty or the same as the last value in the array
// 	if (name != '' && name != arr[arr.length-1]){
// 		arr.push(name);
// 	}
	
// 	res.render('index.ejs');
// 	console.log(arr);
// });

// app.get('/:name', function(req, res){

// 	res.render('index.ejs', {name: arr});
// });
// app.listen(3000);

// console.log('listening on port 3000!');