const router = require("express").Router();
const userController = require("../../controllers/userController");


//Matches with "/api/user"
router.route("/")
  .put(userController.updateUser);

router.route("/users")
  .get(userController.getUsers);

// Matches with "/api/user/:userName"
router.route("/:userName")
  .get(userController.getUserInfo);
  
router.route("/addFriend/:userName")
  .put(userController.addFriend);
  
router.route("/removeFriend/:userName")
  .delete(userController.removeFriend);
//   .put(reviewsController.update)
//   .delete(reviewsController.remove);

module.exports = router;