const express = require('express');
const routesRouter = require('./routes');
const logger = require('./middleware/logger');
const morgan = require('morgan');

let app = express();

app.use(morgan('tiny'));
app.use(logger);
app.use(express.json());
app.use('/', routesRouter);

app.listen(3000, () => console.log('Listening on port 3000'));