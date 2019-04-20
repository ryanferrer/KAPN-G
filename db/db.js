const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'kapng';
 
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  console.log("Connected successfully to server");
 
  // const db = client.db(dbName);

  client.close();
});


// module.exports = db;