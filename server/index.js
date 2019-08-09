var express = require('express'); // used for routing
var app = express(); 
var path = require('path');
var http = require('http').Server(app); // used to provide http functionality
var bodyParser = require('body-parser'); // created an insatnce of body-parser
// var cors = require(cors());
// app.use(cors());

// Using middleware to parse JSON data
app.use(bodyParser.json());
// Serve static content for the app
app.use(express.static(path.join(__dirname,'../dist/week4tut/')));

// Route for checking user credentials
require('./routes/api-login.js')(app, path);
// Start the server listening on port 3000.
require('./listen.js')(http);
