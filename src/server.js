'use strict';

var express = require('express');
var parser = require('body-parser');
var httpProxy = require('http-proxy');
// var router = require('./api');

var proxyOptions = {
    changeOrigin: true
};

httpProxy.prototype.onError = function (err) {
    console.log(err);
};

var apiProxy = httpProxy.createProxyServer(proxyOptions);

// BreweryDB API keys
var apiKey = '7c1b5905b50b778751d381cd69ff2b90';
// var apiForwardingUrl = 'https://api.brewerydb.com/v2/' + 'beers?'+ 'styleId=3' + '&key=' + apiKey; 
// var apiForwardingUrl = 'http://api.open-notify.org/astros.json?';
var apiForwardingUrl = 'https://api.brewerydb.com/v2/beers?ids=n3GrA9&key=7c1b5905b50b778751d381cd69ff2b90';

console.log('Forwarding API request to ' + apiForwardingUrl);

// Node express server setup.
var app = express();
var port = '3000';
app.use('/', express.static('public'));

// Grab all requests to the server with "/space/".
app.all("/space/*", function(req, res) {
	apiProxy.web(req, res, {target: apiForwardingUrl});
	console.log('A request was made to /space/');
});


app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));

// Start Server.
app.listen( port, function(){
	console.log('Server listening on port ' + port);
});

