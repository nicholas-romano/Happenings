const router = require("express").Router();
const userController = require("../../controllers/userController");


//Matches with "/api/user"
router.route("/")
  .put(userController.updateUser);

// Matches with "/api/user/:userName"
 router
    .route("/:userName")
    .get(userController.getUserInfo);
 
//   .put(reviewsController.update)
//   .delete(reviewsController.remove);

module.exports = router;