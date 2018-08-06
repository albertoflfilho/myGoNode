const express = require('express');
const app = express();

app.get('/test', (req, res, next) => {
  res.send('Hey Express!');
  next();
})


app.get('/test', (req, res) => {
  console.log('Working...');

})

app.listen(3000);
