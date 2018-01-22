const express = require('express');

const app = express();

var port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});