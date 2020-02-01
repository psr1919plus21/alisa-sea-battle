import * as express from 'express';
import handleRequest from "./main/handleRequest";

const https = require('https');
const fs = require('fs');

const bodyParser = require('body-parser');
const app = express();

const updateRepo = require('../shell/updateRepo');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const port = 3000;

app.get('/', (req, res) => {
    console.log('app.get("/")');
    res.send('Hello World!')
});

app.post('/hook', (req, res) => {
    console.log('app.post("/hook" )');
    console.log('req: ', req);
    updateRepo();
    res.send('hook test')
});


app.post('/', handleRequest);

const options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: '1234'
};

https
    .createServer(options, app)
    .listen(3000, () => console.log(`Example app listening on port ${port}!\nhttp://localhost:${port}`));
