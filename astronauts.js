const express = require('express');
const bodyParser = require('body-parser');

var uuid = require('uuid-v4');

const astronauts = express.Router();

const astronautsList = [];

astronauts.post('/', (req, res) => {
    let newAstrounat = req.body;

    newAstrounat.ID = uuid();
    astronautsList.push(newAstrounat);
    res.json(newAstrounat);
});

astronauts.get('/', (req, res) => {
    res.json(astronautsList);
});

astronauts.get('/:id', (req, res) => {
    let id = req.path.id;

    let index = astronautsList.findIndex(a => {return a.ID === id});

    if(index == -1) {
        res.sendStatus(400);
    } else {
        res.status = 200;
        res.json(astronautsList[index]);
    }
});

module.exports = astronauts;