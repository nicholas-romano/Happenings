// EXS 17th July 2020
// Test seed files to ensure it exectures as required.
// Schema will be created here, this is just to test our data

const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/happenings-app',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

console.log('Inside seedDB.js')
//console.log('Places: ', db.Places)
//console.log('Reviews: ', db.Reviews)

const placesSeed = [
  {
    placeName: 'myTestPlaceName4',
    placeAddress: '2456 Main St',
    placeEvent: 'None',
    placeEventStart: 'eventStart',
    placeEventFinish: 'eventFinish',
    placeCreatedBy: 'Eddie'
  },
  {
    placeName: 'myTestPlaceName5',
    placeAddress: '2456 Main St',
    placeEvent: 'None',
    placeEventStart: 'eventStart',
    placeEventFinish: 'eventFinish',
    placeCreatedBy: 'Eddie'
  }
]

const reviewsSeed = [
  {
    reviewOwner: 'TestUser',
    reviewCreated: 'Today',
    reviewTitle: 'TestTitle',
    reviewBody: 'TestRewviewBody',
    reviewRating: 5,
    reviewLocation: 'Testing Location'
  }
]

// When we execture the seedsDB, this removes all entries and then insert the records above
console.log('Our Places ', db.Places)
db.Places.deleteMany({})
  // .then(console.log(db.Places.base))
  .then(() => db.Places.collection.insertMany(placesSeed))
  .then(() => db.Reviews.collection.insertMany(reviewsSeed))
  .then(data => {
    // console.log(data.result.n + ' places records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

// console.log('Our Reviews ', db.Reviews)
// db.Reviews.deleteMany([])
//   // .then(console.log(db.Reviews.base))
//   .then(() => db.Reviews.collection.insertMany(reviewsSeed))
//   .then(data => {
//     console.log(data.result.n + ' review records inserted!')
//     process.exit(0)
//   })
//   .catch(err => {
//     console.error(err)
//     process.exit(1)
//   })
