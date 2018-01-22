const express = require('express');
const bodyParser = require('body-parser');

var uuid = require('uuid-v4');

const astronauts = express.Router();

const astronautsList = [];


module.exports = astronauts;