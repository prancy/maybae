const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  images: String,
  category: String,
  type: String,
  productTags: String,
  brand: String,
  price: Number,
  featured: Boolean,
  bestSeller: Boolean,
  newProduct: Boolean
})

module.exports = mongoose.model('Product', productSchema);


