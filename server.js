const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3001;
const api = require('./routes/noteroute')
const html = require('./routes/htmlroute')
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/', html);





app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);