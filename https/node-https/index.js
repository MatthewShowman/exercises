const https = require('https');
const express = require('express');
const fs = require('fs');

const myKey = fs.readFileSync('my-key.pem');
const myCert = fs.readFileSync('my-cert.pem');

const options = {
    key: myKey,
    cert: myCert,
};

const app = express();

app.get('/', (req, res) => {
    res.json({message: 'hello'})
});

https.createServer(options, app).listen(443, () => console.log('listening in on port 443'));