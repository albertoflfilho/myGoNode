const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.send('Node.js');
})

app.listen(3000);
