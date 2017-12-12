const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId,
    ref: 'User' },
})

module.exports = mongoose.model('Order', orderSchema);
