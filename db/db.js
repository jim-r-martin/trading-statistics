const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mvp',
});

connection.connect();

const sectorStatRetrieval = (cb) => {
  connection.query('SELECT * FROM sectorStats', function (err, data) {
    if (err) {
      return cb(err, null);
    }
    cb(null, data);
  });
};

const updateSector = (name, performance) => {
  connection.query(`REPLACE INTO sectorStats(name, performance)
    VALUES ('${name}', ${performance})`, (err, rows, fields) => {
      if (err) return console.log(err);
      console.log(rows);
    });
};

module.exports = {
  sectorStatRetrieval,
  updateSector
};
