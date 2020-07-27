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
    // reviewCreated: "Today",
    reviewTitle: "TestTitle",
    reviewBody: "TestRewviewBody",
    reviewRating: 5,
    reviewLocation: "Testing Location",
    reviewTestField: "Test",
    reviewLat: 53.2734,
    reviewLong: -7.77832031,
  },
];

const friendsSeed = [
  {
    friendsOwner: "Eddie",
    friendsList: "None",
  },
];

const userInfoSeed = [
  {
    userName: "Eddie",
    userPicture: "None",
    userEmail: "Eddie@noemail.com",
    userInterest: "Nothing",
  },
];

const quickInfoSeed = [
  {
    placeEmoji: "Test",
    placeTags: "123",
    placeImage: "Placeholder if needed",
  },
];

const locationEventsSeed = [
  {
    eventLocation: "ourTestlocation",
    eventStart: TODAY.getDate(),
    eventEnd: TODAY.getDate(),
  },
];

// EXS When we execture the seedsDB, this removes all entries and then insert the records above
// Optimize this code later
// console.log(db.Friends, db.UserInfo)

db.Places.deleteMany({})
  .then(console.log("Adding Places"))
  .then(() => db.Places.collection.insertMany(placesSeed))
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Reviews.deleteMany({})
  .then(console.log("Adding My Reviews", reviewsSeed))
  .then(() => db.Reviews.collection.insertMany(reviewsSeed))
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Friends.deleteMany({})
  .then(console.log("Adding Friends"))
  .then(() => db.Friends.collection.insertMany(friendsSeed))
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.UserInfo.deleteMany({})
  .then(console.log("Adding UserInfo"))
  .then(() => db.UserInfo.collection.insertMany(userInfoSeed))
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.QuickInfo.deleteMany({})
  .then(console.log("Adding My QuickInfo"))
  .then(() => db.QuickInfo.collection.insertMany(quickInfoSeed))
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.LocationEvents.deleteMany({})
  .then(console.log("Adding QuickInfo"))
  .then(() => db.LocationEvents.collection.insertMany(locationEventsSeed))
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
