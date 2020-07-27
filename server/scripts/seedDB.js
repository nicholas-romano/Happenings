// EXS 17th July 2020
// Test seed files to ensure it exectures as required.
// Schema will be created here, this is just to test our data

const mongoose = require("mongoose");
const db = require("../models");
const TODAY = new Date();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/happenings-app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const placesSeed = [
  {
    placesName: "myTestPlaceName4",
    placesAddress: "2456 Main St",
    placesCreatedBy: "Eddie",
    placesQuickInfoTitle: "Ok Food",
    placesQuickInfoEmoji: "Emoji goes here",
    placesQuickInfoTags: ["Fast Food", "Greasy Spoon"],
    placesQuickInfoPicture: "",
  },
  {
    placesName: "myTestPlaceName5",
    placesAddress: "7890 Main St",
    placesCreatedBy: "Eddie2",
    placesQuickInfoTitle: "Good Craft Beer",
    placesQuickInfoEmoji: "Emoji goes here2",
    placesQuickInfoTags: ["Craft Beer"],
    placesQuickInfoPicture: "",
  },
];

const reviewsSeed = [
  {
    reviewOwner: "TestUser",
    reviewCreated: "Today",
    reviewTitle: "TestTitle",
    reviewBody: "TestRewviewBody",
    reviewRating: 5,
    reviewLocation: "Testing Location",
    reviewTestField: "It's A Trap!",
    reviewLat: 35.711264,
    reviewLong: -78.614171,
    reviewGeoLocation: [35.711264, -78.614171],
    reviewComments: ["Comment1", "Comment2"],
  },
];

const locationEventsSeed = [
  {
    eventLocation: "ourTestlocation",
    eventStart: TODAY.getDate(),
    eventEnd: TODAY.getDate(),
  },
];

const userSeed = [
  {
    firstName: "Eddie",
    lastName: "Saunders",
    userName: "Admin",
    password: "",
    userEmail: "saunders.eddie@outlook.com",
    friends: ["Richard", "Jason", "Nick", "Tevin"],
    userInterest: ["Beer", "Scotch", "Food"],
  },
];
// EXS When we execture the seedsDB, this removes all entries and then insert the records above
// Optimize this code later

db.Places.deleteMany({})
  .then(console.log("Adding Places"))
  .then(() => db.Places.collection.insertMany(placesSeed))
  .then((data) => {
    console.log(data.result.n + " places records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Reviews.deleteMany({})
  .then(console.log("Adding My Reviews"))
  .then(() => db.Reviews.collection.insertMany(reviewsSeed))
  .then((data) => {
    console.log(data.result.n + " reviews records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.LocationEvents.deleteMany({})
  .then(console.log("Adding Location Events"))
  .then(() => db.LocationEvents.collection.insertMany(locationEventsSeed))
  .then((data) => {
    console.log(data.result.n + " location events records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.User.deleteMany({})
  .then(console.log("Adding A User"))
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " user records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
