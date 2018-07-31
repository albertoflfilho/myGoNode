const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Node.js');
})

app.listen(3000);
//localhost:3000