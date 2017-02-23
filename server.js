var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/')); // ← adjust
app.listen(8086, function() {
    console.log('Server running at http://127.0.0.1:8086');
});

const opn = require('opn')
console.log('Opening home page at http://localhost:8086/');
opn('http://localhost:8086/')