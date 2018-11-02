const express = require('express');
const path = require("path");
const app = express()

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/location.json'));
});

app.listen(3000, () => console.log('Listening on port 3000!'))