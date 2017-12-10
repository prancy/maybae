const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_type: String,
  product_category: String,
  product_tags: String,
  brand: String,
  price_greater_than: Number,
  price_less_than: Number,
  rating_greater_than: Number,
  rating_less_than: Number,
  featured: Boolean,
  best_seller: Boolean,
  new_product: Boolean
})

module.exports = mongoose.model('Product', productSchema);


