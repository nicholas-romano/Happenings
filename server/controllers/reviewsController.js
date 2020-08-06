const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the reviewsController
module.exports = {
  findAll: (req, res) => {
    if (req.user) {
      db.Reviews.find({}).sort({ _id: -1 })
        .then((reviews) => {
          res.json(reviews);
        })
        .catch((err) => res.status(422).json(err));
    }
  },
  findById: (req, res) => {
    //console.log("req.params.id: ", req.params.id);
    if (req.user) {
      db.Reviews.find({
        _id: req.params.id,
      })
        .then((review) => {
          res.json(review);
        })
        .catch((err) => res.status(422).json(err));
    }
  },
  create: (req, res) => {
    //console.log("review submitted: ", req.body);
    const {
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
    } = req.body;
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
        .then((dbReview) => {
          res.json(dbReview);
        })
        .catch((err) => res.status(422).json(err));
    }
  },
  addComment: (req, res) => {
    const { id } = req.params;
    const { user, message, time } = req.body;

    db.Reviews.updateOne(
      {
        _id: ObjectId(id)
      },
      {
        $push: {
          reviewComments: {
            $each: [{ user, message, time}],
            $sort: { time: -1 }
          }
        }
      }
    )
      .then((comment) => {
        res.json(comment);
      })
      .catch((err) => {
        res.json(err);
      });

  },
  updateUserName: (req, res) => {
    const user = req.user.userName;
    console.log('user before change: ', user);
    const userName = req.params.userName;
    console.log('Update Username to: ', userName);

    db.User.findOne({ userName: userName }, (err, userMatch) => {

      //If a match was found, someone else has the same username, return an error:
      if (userMatch) {
        console.log('Error: that username already exists.')
        return res.json({
          error: 'That username already exists. Please choose another.'
        });
      } else {
        //Username does not already exist:
        db.Reviews.updateMany(
          {
            reviewOwner: user
          },  
          {
            $set: {
              reviewOwner: userName
            }
          },
          (error, data) => {
            if (error) {
              res.send(error);
            } else {
              res.send(data);
            }
          }
        );
          
      }

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