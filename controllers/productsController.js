
function getProducts(req, res) {
  Product.find({})
  .then(product => {
    res.json(product)
  })
}

function addWishList(req, res) {
  res.body.user
  console.log(req.body.user)
}

module.exports = {
  getProducts,
  addWishList
}