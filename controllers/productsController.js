const Product = require('./../models/Product');

function getProducts(req, res) {
  Product.find({})
  .then(product => {
    res.json(product)
  })
}

module.exports = {
  getProducts
}