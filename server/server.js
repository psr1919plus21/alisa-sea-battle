const https = require('https');
const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

const port = 3000;

app.get('/', (req, res) => {
    console.log('app.get("/")');
    res.send('Hello World!')
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('done');
});

var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: '1234'
  };

https.createServer(options, app).listen(3000, () => console.log(`Example app listening on port ${port}!\nhttp://localhost:${port}`));