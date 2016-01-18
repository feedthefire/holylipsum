/// <reference path="../typings/tsd.d.ts" />
/// <reference path='../typings/express/express.d.ts' />


import http = require("http")
import url = require("url")
import express = require("express")
import bodyParser = require("body-parser");
import methodOverride = require("method-override");
import errorHandler = require("errorhandler");

import routeIndex = require("./routes/index")
import routeAbout = require("./routes/about")
import routeScenes = require("./routes/scenes")

var port = process.env.port || 3003;  
var app = express();

// Configuration

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('view options', { layout: false });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/www'));

var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    app.use(errorHandler({ dumpExceptions: true, showStack: true }));
}
else if (env === 'production') {
    app.use(errorHandler());
}

// Routes
app.get('/', routeIndex.view);
app.get('/scenes/', routeScenes.view);
app.get('/scenes/:scene', routeScenes.view);
app.get('/about/', routeAbout.view);
app.listen(port);
console.log('Running server at http://localhost:' + port); 
