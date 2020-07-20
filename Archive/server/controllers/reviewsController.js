const ObjectId = require('mongoose').Types.ObjectId
const db = require('../models')

// Defining methods for the reviewsController
module.exports = {

    findAll: function (req, res) {
        if (req.user) {
            db.Reviews.findAll({})
            .then(reviews => {
                res.json(reviews);
            })
        }
    }

//   findAll: function (req, res) {
//     if (req.user) {
//       db.Reviews.find({ _id: req.user._id })
//         .populate({ path: 'reviews', options: { sort: { reviewCreated: -1 } } })
//         .then(users => {
//           res.json({ reviews: users[0].reviews })
//         })
//         .catch(err => res.status(422).json(err))
//     } else {
//       return res.json({ reviews: null })
//     }
//   }
  //,
//   findById: function (req, res) {
//     if (req.user) {
//       db.Reviews.find({ _id: req.user._id })
//         .populate('reviews')
//         .then(reviews => {
//           const review = reviews[0].reviews.filter(
//             b => b._id.toString() === req.params.id
//           )
//           res.json({ review: review[0] })
//         })
//         .catch(err => res.status(422).json(err))
//     } else {
//       return res.json({ review: null })
//     }
//   },
//   create: function (req, res) {
//     db.Reviews.create(req.body)
//       .then(dbReview => {
//         return db.Review.findOneAndUpdate(
//           { _id: req.user._id },
//           { $push: { reviews: dbReview.username } },
//           { new: true }
//         )
//       })
//       .then(review => {
//         // If the User was updated successfully, send it back to the client
//         res.json(review)
//       })
//       .catch(err => res.status(422).json(err))
//   },
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
