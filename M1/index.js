const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Accessed...');
  next();
})


app.get('/test', (req, res) => {
  res.send("Hey Express!");
})

app.listen(3000);
