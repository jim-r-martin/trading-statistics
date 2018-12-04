const axios = require('axios');
const db = require('./db');

axios.request('https://api.iextrading.com/1.0/stock/market/sector-performance')
  .then((res) => {
    const { data } = res;
    for (let i = 0; i < data.length; i++) {
      const { name, performance } = data[i];
      db.updateSector(name, performance);
    }
  })
  .catch(err => console.log(err));
  