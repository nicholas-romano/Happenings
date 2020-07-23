const ObjectId = require('mongoose').Types.ObjectId
const db = require('../models')

// Defining methods for the reviewsController
module.exports = {

    findAll: function (req, res) {
        if (req.user) {
            db.Reviews.find({})
            .then(reviews => {
                res.json(reviews);
            })
            .catch(err => res.status(422).json(err))
        }
    },
    create: function (req, res) {
        if (req.user) {
            db.Reviews.create(req.body)
            .then(dbReview => {
                res.json(dbReview);
            })
            .catch(err => res.status(422).json(err))
        }
    },
    findByUserName: function (req, res) {
    if (req.user) {
      db.User.find({ userName: req.params.userName })
        .then(user => {
          res.json(user);
        })
        .catch(err => res.status(422).json(err))
    } else {
      return res.json({ user: null })
    }
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
