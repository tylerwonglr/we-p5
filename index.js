"use strict";

const express = require('express');

let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let port = process.env.PORT || 3000;
let EndpointsClass = require('./endpoint/Endpoints');
let Endpoints = new EndpointsClass();

server.listen(port, function () {
	console.log('Server listening at port %d', port);
});

Endpoints.setup(io);

