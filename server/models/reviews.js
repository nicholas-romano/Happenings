const mongoose = require("mongoose");
const { FALSE } = require("node-sass");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  reviewOwner: {
    type: String,
    required: true
  },
  reviewCreated: {
    type: String,
    required: true
  },
  reviewTimeStamp: {
    type: Number,
    required: true
  },
  reviewTitle: {
    type: String,
    required: true
  },
  reviewBody: {
    type: String,
    required: false
  },
  reviewRating: {
    type: Number,
    required: true
  },
  reviewLocation: {
    type: String,
    required: true
  },
  reviewLat: {
    type: Number,
    required: false
  },
  reviewLong: {
    type: Number,
    required: false
  },
  reviewGeoLocation: {
    type: Array,
    required: false
  },
  reviewComments: {
    type: Array,
    required: false
  }
});

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;
