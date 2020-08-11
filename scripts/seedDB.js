// EXS 17th July 2020
// Test seed files to ensure it exectures as required.
// Schema will be created here, this is just to test our data

const mongoose = require("mongoose");
const db = require("../models");
const TODAY = new Date();

console.log("Executing database seed");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/happenings-app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

//console.log("We are Inside seedDB.js");
//console.log('Places: ', db.Places)
//console.log('Reviews: ', db.Reviews)

const placesSeed = [
  {
    placeName: "myTestPlaceName4",
    placeAddress: "2456 Main St",
    // placeEvent: 'None',
    // placeEventStart: Date.now,
    // placeEventFinish: Date.now,
    placeCreatedBy: "Eddie",
  },
  {
    placeName: "myTestPlaceName5",
    placeAddress: "2456 Main St",
    // placeEvent: 'None',
    // placeEventStart: Date.now,
    // placeEventFinish: Date.now,
    placeCreatedBy: "Eddie",
  },
];

const reviewsSeed = [
  {
    reviewOwner: "TestUser",
    reviewCreated: Date.now().toLocaleString(),
    reviewTitle: "TestTitle",
    reviewBody: "TestRewviewBody",
    reviewRating: 5,
    reviewLocation: "Testing Location",
    reviewTestField: "Test",
    reviewLat: 53.2734,
    reviewLong: -7.77832031,
  },
];

// EXS When we execture the seedsDB, this removes all entries and then insert the records above
// Optimize this code later
// console.log(db.Friends, db.UserInfo)

db.Reviews.deleteMany({})
  .then(() => {
    //console.log("Adding My Reviews", reviewsSeed
  })
  .then(() => db.Reviews.collection.insertMany(reviewsSeed))
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
