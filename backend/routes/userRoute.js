const express = require('express');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails } = require('../controllers/userController');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/logout').get(logoutUser);
router.route('/me').get(isAuthenticatedUser, getUserDetails);

module.exports = router;