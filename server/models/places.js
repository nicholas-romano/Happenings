const mongoose = require('mongoose')
const Schema = mongoose.Schema

// EXS 18tgh July 2020, not sure we need the event details now we have it's own collection

const placesSchema = new Schema({
  placeName: { type: String, required: true },
  placeAddress: { type: String, required: true },
  title: { type: String, required: true },
  placeCreatedBy: { type: String, required: true }
})

const Places = mongoose.model('Places', placesSchema)

module.exports = Places
