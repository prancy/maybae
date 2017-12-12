const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  apiId: String,
  name: String,
  image: String
})

module.exports = mongoose.model('Product', productSchema);