var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/maybae", {useMongoClient: true});

var db = mongoose.connection;

db.once('open', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});