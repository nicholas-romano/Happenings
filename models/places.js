const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placesSchema = new mongoose.Schema({
  placeName: {
    type: String,
    required: true
  },
  placeAddress: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  placeEvent: {
    type: String,
    required: false
  },
  placeEventStart: {
    type: String,
    required: false
  },
  placeEventEnd: {
    type: String,
    required: false
  },
  placeCreatedBy: {
    type: String,
    required: true
  }
})

const Places = mongoose.model('places', placesSchema)

module.exports = Places
