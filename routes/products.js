const express = require('express');
const router = express.Router();
const products = require('../controllers/productsController');

router.get('/products', products.getProducts);
router.post('/products/like', products.addWishList);


module.exports = router;