const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-find-or-create');

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  passwordDigest: String
  orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}]
}, {
  timestamps: true
});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', userSchema);