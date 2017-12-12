const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const lineSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId,
    ref: 'Product' },
  orderId: { type: mongoose.Schema.Types.ObjectId,
    ref: 'Order' },
  })

module.exports = mongoose.model('Line', lineSchema);