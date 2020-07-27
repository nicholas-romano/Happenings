// EXS 18th July - Draft friends list

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

console.log("We are in our Friends Model");
const friendsSchema = new Schema({
  friendsOwner: { type: String, required: true },
  friendsList: { type: String, required: true },
});

const Friends = mongoose.model("Friends", friendsSchema);

module.exports = Friends;
