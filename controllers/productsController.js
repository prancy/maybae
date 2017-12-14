
function getProducts(req, res) {
  Product.find({})
  .then(product => {
    res.json(product)
  })
}

function addWishList(req, res) {
  console.log('this is the function of addwishlst', req.body)
  User.findOne({_id: req.body.user._id}, (err, user) => {
    console.log('this is the wishlist', user.wishList)
    if (user.wishList.indexOf({id: req.body.apiId}) === -1) {
      user.wishList.push({name: req.body.name, id: req.body.apiId})
      user.save(err =>
      console.log('Added to List'),
      console.log(user.wishList)
      )
    } else {
      console.log('Not added to List')
    }
  })
}

module.exports = {
  getProducts,
  addWishList
}