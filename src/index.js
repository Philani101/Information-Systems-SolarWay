const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyparser = require('body-parser');

const {router} = require('./api/routes');

const app = express();
app.use(express.static(path.resolve(__dirname, './')));
app.use(express.json());
app.use(bodyparser.json());
app.use('/api', router);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Home/Home-1.html'));
});

const port = 3000;

app.listen(port, () => {
    console.log('listening on', port)
});

