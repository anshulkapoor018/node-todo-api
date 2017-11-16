var mongoose = require('mongoose');

var options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
}

var url = 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(url, options);

//Setting up a mongoose model
var Todo = mongoose.model('Todo', {
  text : {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Trekking',
  completed: true,
  completedAt: 2008
});

newTodo.save().then((doc) => {
  console.log('Saved Todo...!', doc);
}, (err) => {
  console.log('Unable to save Todo.', err);
});
