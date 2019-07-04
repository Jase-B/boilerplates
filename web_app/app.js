const path = require('path');
const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/dist'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(1337, () => console.log('\nNow serving...\n'));