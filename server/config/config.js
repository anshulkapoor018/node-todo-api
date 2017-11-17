var env = process.env.NODE_ENV || 'development';
var url = 'mongodb://localhost:27017/TodoApp';
var urlTest = 'mongodb://localhost:27017/TodoAppTest';

console.log('env ******', env);

if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = url;
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = urlTest;
}
