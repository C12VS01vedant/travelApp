const express = require('express');
const router = express.Router();
const signUpHandler=require('../controllers/signupController');
const loginHandler=require('../controllers/loginController');

// localhost:3500/api/auth/register
router.route('/register').
post(signUpHandler);

router.route('/login').post(loginHandler)



module.exports = router;

