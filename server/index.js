const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('../db/db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const port = 3000;
const dist = path.join(__dirname, '../client/dist');
console.log(dist);
app.listen(port, (err) => {
  if (err) {
    return console.log(`error listening on port ${port}. error: ${err}`);
  }
  console.log(`listening on port ${port}`);
});

app.use('/', express.static(dist));

app.get('/sectors', (req, res) => {
  db.sectorStatRetrieval((err, data) => {
    if (err) {
      return console.log(err);
    }
    res.json(data);
  });
});
