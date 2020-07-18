const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quickInfoSchema = new Schema({
  placeEmoji: { type: String, required: true },
  placeTags: { type: String, required: true },
  placeImage: { type: String, required: true }
})

const QuickInfo = mongoose.model('QuickInfo', quickInfoSchema)

module.exports = QuickInfo
