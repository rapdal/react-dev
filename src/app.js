const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const indexPath = path.join(__dirname, '/../index.html');
const publicPath = express.static(path.join(__dirname, '../public'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('../server/routes')(app);
app.use('/public', publicPath);
app.get('/', (_, res) => res.sendFile(indexPath));    

module.exports = app;