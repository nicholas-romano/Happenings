const mongoose = require("mongoose");
const db = require("../models");

console.log("Executing database seed");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/happenings-app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const usersSeed = [
  {
    firstName: "John",
    lastName: "Doe",
    userName: "jdoe",
    userEmail: "jdoe@gmail.com",
    profileImg: "",
    password: "password",
    friends: [
      {
        userName: "mjones"
      }
    ],
    userInterest: []
  },
  {
    firstName: "Mary",
    lastName: "Jones",
    userName: "mjones",
    userEmail: "mjones@gmail.com",
    profileImg: "",
    password: "password",
    friends: [
      {
        userName: "jdoe"
      }
    ],
    userInterest: []
  },
];

const reviewsSeed = [
  {
    reviewOwner: "John Doe",
    reviewCreated: Date.now().toLocaleString(),
    reviewTitle: "Review Title",
    reviewBody: "Review Message",
    reviewRating: 3,
    reviewLocation: "Review Location",
    reviewLat: 35.96794,
    reviewLong: -78.54322,
    reviewGeoLocation: [35.96794, -78.54322],
    reviewComments: [
      {
        user: "mjones",
        message: "Review comment",
        time: Date.now().toLocaleString()
      }
    ]
  },
];

// EXS When we execture the seedsDB, this removes all entries and then insert the records above
db.User.deleteMany({})
  .then(() => {
    console.log("Adding Users: ", usersSeed)
  })
  .then(() => db.User.collection.insertMany(usersSeed))
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Reviews.deleteMany({})
  .then(() => {
    console.log("Adding Reviews: ", reviewsSeed)
  })
  .then(() => db.Reviews.collection.insertMany(reviewsSeed))
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
