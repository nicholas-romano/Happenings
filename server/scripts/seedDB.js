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
    useCreateIndex: true
  }
);

// EXS When we execture the seedsDB, this removes all entries and then insert the records above
// Optimize this code later

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
