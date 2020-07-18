const mongoose = require('mongoose')
const Schema = mongoose.Schema

const friendsSchema = new Schema({
  friendsOwner: { type: String, required: true },
  friendsList: { type: String, required: true }
})

const Friends = mongoose.model('Friends', friendsSchema)

module.exports = Friends
