//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Destructuring

// var obj = new ObjectID(); //creating new instance of ObjectID
// console.log(obj);

// Object Destructuring example
// var user = {name: 'Anshul', age: 23};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to the Mongo database');
  }
  console.log('Connected to Mongo database');

  // db.collection('Todos').insertOne({
  //   text : 'Start reading...!',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert Todos.');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name : 'Priyank',
  //   age: 22,
  //   location : 'krishna nagar'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert Users.');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});
