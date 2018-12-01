const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const port = 3000;

app.listen(port, (err) => {
  if (err) {
    return console.log(`error listening on port ${port}. error: ${err}`);
  }
  console.log(`listening on port ${port}`);
});

app.use('/', express.static(path.join(__dirname, 'signIn')));

app.use('/home', express.static(path.join(__dirname, 'profile')));

app.post('/sessions', (req, res) => {
  console.log('sessions');
  console.log(req.body);
  res.sendStatus(200).end();
});

// app.get('/', (req, res) => {
//   res.sendStatus(200).end();
// });
