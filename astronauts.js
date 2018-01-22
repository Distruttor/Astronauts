const express = require('express');
const bodyParser = require('body-parser');

var uuid = require('uuid-v4');

const astronauts = express.Router();

const astronautsList = [];

astronauts.post('/', (req, res) => {
    let newAstrounat = req.body.newAstrounat;

    newAstrounat.ID = uuid();
    astronautsList.push(newAstrounat);
    res.json(newAstrounat);
});

module.exports = astronauts;