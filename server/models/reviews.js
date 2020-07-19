const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewsSchema = new Schema({
  reviewOwner: { type: String, required: true },
  reviewCreated: { type: Date, default: Date.now, required: true },
  reviewTitle: { type: String, required: true },
  reviewBody: { type: String, required: true },
  reviewRating: { type: Number, required: true },
  reviewLocation: { type: String, required: true }
})

const Reviews = mongoose.model('Reviews', reviewsSchema)

module.exports = Reviews
