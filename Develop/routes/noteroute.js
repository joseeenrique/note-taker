const express = require('express');


const Router = require('./notes.html');


const app = express();

app.use('/notes.html');


module.exports = app;
