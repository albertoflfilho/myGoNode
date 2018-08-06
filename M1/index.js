const express = require('express');
const app = express();

const userMiddleware = (req, res, next) => {
  console.log('Accessed...');
  next();
};


app.get('/test', (req, res) => {
  res.send("Hey Express!");
})

app.get('/user', userMiddleare, (req, res) =>{
  res.send('User: Alberto');
})

app.listen(3000);
