var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var usersCtrl = require('../../controllers/usersController');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/wishlist', usersCtrl.profil);

// router.get('/profile', usersCtrl.userProfile);

/*---------- Protected Routes ----------*/



module.exports = router;