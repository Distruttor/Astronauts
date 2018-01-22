const express = require('express');
const bodyParser = require('body-parser');

var astronauts = require('./astronauts');

const app = express();
app.use(bodyParser.json());

var port = process.env.PORT || 9000;

app.use('/astronauts', astronauts);

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});