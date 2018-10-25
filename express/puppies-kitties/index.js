const express = require('express');
const routes = require('./routes');

let app = express();

app.use(express.json());
app.use('/', routes);

app.listen(3000);