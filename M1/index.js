const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.set('view engine', 'njk');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/auth', (req, res) => {

  const { username, password } = req.body;

  res.send(`We can find the current logged in username ${ username } and password ${ password }`);

})

app.listen(3000);
