const MongoClient = require('mongodb').MongoClient;
 
// Connection URL configuration
const port = 27017;
const address = 'localhost'

const database = 'kapng';
const collection = 'names';

const url = `mongodb://${address}:${port}`;

const client = new MongoClient(url, {useNewUrlParser: true});

client.connect((err, success) => {
  if (err){
    console.log('incorrect username or password');
    client.close();
  } else {
    client.db(database).collection(collection).findOne({name: 'tacit ronin'});
    console.log('success!');
    // console.log(client.db(database).collection(collection));
  }
})


// const dbSchema = client.Schema({
//   name: String
// })

// const name = 

// const getOneName = name => 

module.exports = client;