const express = require('express');

var astronauts = require('./astronauts');

const app = express();

var port = process.env.PORT || 9000;

app.use('/astronauts', astronauts);

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});