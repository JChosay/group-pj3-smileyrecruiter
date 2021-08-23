const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveJob,
  updateUser,
  //deleteBook,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveJob);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser).put(authMiddleware, updateUser);

//router.route('/books/:bookId').delete(authMiddleware, deleteBook);

module.exports = router;
