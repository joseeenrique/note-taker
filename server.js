const express = require('express');
const path = require('path');

const app = express();
app.listen(3001);


app.get('/notes', (req, res) =>
  res.sendFile('./public/notes.html')
);


app.get('*', (req, res) =>
  res.sendFile('./public/index.html')
);


// app.get('/api/notes', (req, res) =>
//   res.sendFile('./public/notes.html')
// );

// app.post('/api/notes', (req, res) =>
//   res.sendFile('./public/notes.html')
// );


