const router = require("express").Router();
const reviewsController = require("../../controllers/reviewsController");

// Matches with "/api/reviews"
router.route("/")
  .get(reviewsController.findAll)
  .post(reviewsController.create);

// Matches with "/api/reviews/:userName"
 router
   .route("/:userName")
   .get(reviewsController.findByUserName)
//   .put(reviewsController.update)
//   .delete(reviewsController.remove);

module.exports = router;
