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

db.User.deleteMany({})
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Reviews.deleteMany({})
  .then((data) => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
