var User = require('../models/user');

function getProducts(req, res) {
  Product.find({})
  .then(product => {
    res.json(product)
  })
}

function addWishList(req, res) {
  User.findOne({_id: req.body.user._id}, (err, user) => {
    if (!user.wishlist.some(product => product.id === req.body.apiId)) {
      user.wishlist.push({name: req.body.name, id: req.body.apiId})
      user.save((err, data) =>{
        if (err) {
          res.status(500).json(err)
        }
        res.status(200).json(data)
      })
    }
  })
}

module.exports = {
  getProducts,
  addWishList
}