const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Defining methods for the reviewsController
module.exports = {
  findAll: (req, res) => {
    if (req.user) {
      db.Reviews.find({}).sort({ reviewTimeStamp: -1 })
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
      reviewOwner, reviewCreated, reviewTimeStamp, reviewTitle, reviewBody, reviewRating,
      reviewLocation, reviewLat, reviewLong, reviewGeoLocation, reviewComments
    } = req.body;
    if (req.user) {
      db.Reviews.create({
        reviewOwner, reviewCreated, reviewTimeStamp, reviewTitle, reviewBody, reviewRating,
        reviewLocation, reviewLat, reviewLong, reviewGeoLocation, reviewComments
      })
        .then((dbReview) => {
          res.json(dbReview);
        })
        .catch((err) => res.status(422).json(err));
    }
  },
  addComment: (req, res) => {
    const { id } = req.params;
    const { user, message, time, timeStamp } = req.body;

    db.Reviews.updateOne(
      {
        _id: ObjectId(id)
      },
      {
        $push: {
          reviewComments: {
            $each: [{ user, message, time, timeStamp}],
            $sort: { timeStamp: -1 }
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
    //console.log('Reviews user before change: ', user);
    const userName = req.params.userName;
    //console.log('Reviews update Username to: ', userName);

    if (userName === req.user.userName) {
      //username unchanged:
      updateUserNameInfo(user, res, userName);
    } else {
      //username changed:
      db.User.findOne({ userName: userName }, (err, userMatch) => {
        //If a match was found, someone else has the same username, return an error:
        if (userMatch) {
          console.log('Error: that username already exists.')
          return res.json({
            error: 'That username already exists. Please choose another.'
          });
        } else {
          //Username does not already exist change username:
          updateUserNameInfo(user, res, userName);  
        }
      });
    }

  },
  updateComments: (req, res) => {
    const user = req.user.userName;
    //console.log('Comments user before change: ', user);
    const userName = req.params.userName;
    //console.log('Comments update Username to: ', userName);

    if (userName === req.user.userName) {
      //username unchanged:
      updateCommentsInfo(user, res, userName);
    } else {
      //username was changed:
      db.User.findOne({ userName: userName }, (err, userMatch) => {

        //If a match was found, someone else has the same username, return an error:
        if (userMatch) {
          console.log('Error: that username already exists.')
          return res.json({
            error: 'That username already exists. Please choose another.'
          });
        } else {
          updateCommentsInfo(user, res, userName);
        }
      });
    }

  }
    
}

const updateCommentsInfo = (user, res, userName) => {
  
  db.Reviews.updateMany(
    {
      "reviewComments.user": user
    },  
    {
      $set: {
        "reviewComments.$.user": userName
      }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
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

const updateUserNameInfo = (user, res, userName) => {

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
