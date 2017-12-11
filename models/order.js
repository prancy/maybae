const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineItems = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId,
    ref: 'Product' }
  orderId: { type: mongoose.Schema.Types.ObjectId,
    ref: 'Order' }
})

const orderSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId,
    ref: 'User' }
})

module.exports = mongoose.model('Order', orderSchema);
