const db = require('./db.js');

// const collection = db.collection('kapng');

const insertToDB = (obj) => {
  db.save(obj);
}

insertToDB({myName: 'ryden'});