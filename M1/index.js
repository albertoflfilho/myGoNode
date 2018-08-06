const express = require('express');
const app = express();

app.use('/user', (req, res, next) => {
  console.log('Accessed...');
  next();
});

app.get('/user', (req, res) => {
  res.send("User: albertoflfilho");
});

app.get('/user/name', (req, res) =>{
  res.send('Name: Alberto Lacerda');
});

app.listen(3000);
