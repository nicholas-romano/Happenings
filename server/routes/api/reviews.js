const router = require("express").Router();
const reviewsController = require("../../controllers/reviewsController");

// Matches with "/api/reviews"
router.route("/")
  .get(reviewsController.findAll)
  .post(reviewsController.create);

  // Matches with "/api/reviews/:id"
 router.route("/:id")
  .get(reviewsController.findById);

  router.route("/:userName")
  .put(reviewsController.addComment);

  router.route("/comments/:id")
  .get(reviewsController.getComments);

//   .put(reviewsController.update)
//   .delete(reviewsController.remove);

module.exports = router;
