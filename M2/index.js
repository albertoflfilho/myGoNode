const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ exrended: false }));

app.get('/', (req, res) => {
  res.send("Let's go with Node.js");
});

app.listen(3000);
