const db = require('./db-pg-config.js');

const getOneName = () => {
  const queryString = `SELECT * FROM 'names' LIMIT 1`;
}