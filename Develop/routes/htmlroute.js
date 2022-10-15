const express = require('express');


const Router = require('./index.html');


const app = express();

app.use('/index.html');


module.exports = app;
