const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-find-or-create');

var userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
}, {
  timestamps: true
});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', userSchema);