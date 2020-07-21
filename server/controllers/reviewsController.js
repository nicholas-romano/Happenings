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
    },
    create: function (req, res) {
        db.Reviews.create(req.body)
        .then(dbReview => {
            res.json(dbReview);
        })
        .catch(err => res.status(422).json(err))
    }
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
