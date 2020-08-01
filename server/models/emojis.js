// EXS 29th July - Draft friends list

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

console.log("We are in our emojis Model");
const emojiTagSchema = new Schema({
  emojiType: { type: Array, required: false },
  tagType: { type: Array, required: false },
});

const EmojiTag = mongoose.model("EmojiTag", emojiTagSchema);

module.exports = EmojiTag;
