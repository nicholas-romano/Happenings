const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationEventsSchema = new Schema({
  eventLocation: { type: String, required: true },
  eventStart: { type: Date, required: true },
  eventEnd: { type: Date, required: true }
})

const LocationEvents = mongoose.model('LocationEvents', locationEventsSchema)

module.exports = LocationEvents
