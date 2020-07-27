console.log("We are in server userInfo.js");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
  userName: { type: String, required: true },
  userPicture: { type: String, required: true },
  userEmail: { type: String, required: true },
  userInterest: { type: String, required: true },
});

const UserInfo = mongoose.model("UserInfo", userInfoSchema, "userInfo");

module.exports = UserInfo;
