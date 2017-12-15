var User = require('../models/user');

function getProducts(req, res) {
  Product.find({})
  .then(product => {
    res.json(product)
  })
}

function addWishList(req, res) {
  console.log("Sam is lyin")
  return res.json({test: 'hello'})

  
  User.findOne({_id: req.body.user._id}, (err, user) => {
    if (!user.wishList.some(product => product.id === req.body.apiId)) {
      user.wishList.push({name: req.body.name, id: req.body.apiId})
      user.save((err, data) =>{
        if (err) {
          res.status(500).send(err)
        }
        res.status(200).send(data)
      })
    }
  })
}

module.exports = {
  getProducts,
  addWishList
}