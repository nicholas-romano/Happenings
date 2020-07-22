const mongoose = require('mongoose')
const Schema = mongoose.Schema

// EXS 18tgh July 2020, not sure we need the event details now we have it's own collection

const placesSchema = new Schema({
  placesName: { type: String, required: true },
  placesAddress: { type: String, required: true },
  placesCreatedBy: { type: String, required: true },
  placesQuickInfoTitle: { type: String, required: true },
  placesQuickInfoEmoji: { type: String, required: false },
  placesQuickInfoTags: { type: Array, required: false },
  placesQuickInfoPicture: { type: String, required: false }
})

const Places = mongoose.model('Places', placesSchema)

module.exports = Places
