const ObjectId = require('mongoose').Types.ObjectId;
const db = require('../models');

// Defining methods for the reviewsController
module.exports = {

    findAll: (req, res) => {
        if (req.user) {
            db.Reviews.find({})
            .then(reviews => {
                res.json(reviews);
            })
            .catch(err => res.status(422).json(err))
        }
    },
    findById: (req, res) => {
      console.log('req.params.id: ', req.params.id);
      if (req.user) {
        db.Reviews.find({
          _id: req.params.id
        }).then(review => {
          res.json(review);
        }).catch(err => res.status(422).json(err))
      }
    },
    create: (req, res) => {
      console.log('review submitted: ', req.body);
      const { reviewOwner, reviewCreated, reviewTitle, reviewBody, reviewRating, 
              reviewLocation, reviewLat, reviewLong, reviewGeoLocation, 
              reviewComments } = req.body;
        if (req.user) {
            db.Reviews.create({
                reviewOwner, 
                reviewCreated,
                reviewTitle,
                reviewBody,
                reviewRating,
                reviewLocation,
                reviewLat,
                reviewLong,
                reviewGeoLocation,
                reviewComments
            })
            .then(dbReview => {
                res.json(dbReview);
            })
            .catch(err => res.status(422).json(err))
        }
    },
    addComment: (req, res) => {
      const { id } = req.params;
      const {user, message, time} = req.body;

      db.Reviews.updateOne(
          {
            _id: ObjectId(id)
          }, {
              $push: {
                  reviewComments: [{
                    user, message, time
                  }]
              }
          }
      ).then(comment => {
          res.json(comment);
      })
      .catch(err => {
          res.json(err);
      });

    }
//   update: function (req, res) {
//     db.Reviews.findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => {
//         console.log(dbModel)
//         res.json(dbModel)
//       })
//       .catch(err => res.status(422).json(err))
//   },
//   remove: function (req, res) {
//     db.Reviews.findOneAndUpdate(
//       { _id: req.user._id },
//       { $pull: { books: new ObjectId(req.params.id) } },
//       { new: true }
//     ).then(() => {
//       db.Book.findOneAndDelete({ _id: req.params.id })
//         .then(dbReview => res.json(dbReview))
//         .catch(err => res.status(422).json(err))
//     })
//   }
}
