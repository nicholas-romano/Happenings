// EXS 17th July 2020
// Test seed files to ensure it exectures as required.
// Schema will be created here, this is just to test our data

const mongoose = require('mongoose')
const db = require('../models')
const TODAY = new Date()

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/happenings-app',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
)

console.log('Inside seedDB.js')

const placesSeed = [
  {
    placesName: 'myTestPlaceName4',
    placesAddress: '2456 Main St',
    placesCreatedBy: 'Eddie',
    placesQuickInfoTitle: 'Ok Food',
    placesQuickInfoEmoji: 'Emoji goes here',
    placesQuickInfoTags: ['Fast Food', 'Greasy Spoon'],
    placesQuickInfoPicture: ""
  },
  {
    placesName: 'myTestPlaceName5',
    placesAddress: '7890 Main St',
    placesCreatedBy: 'Eddie2',
    placesQuickInfoTitle: 'Good Craft Beer',
    placesQuickInfoEmoji: 'Emoji goes here2',
    placesQuickInfoTags: ['Craft Beer'],
    placesQuickInfoPicture: ""
  }
]

const reviewsSeed = [
  {
    reviewOwner: 'TestUser',
    reviewCreated: 'Today',
    reviewTitle: 'TestTitle',
    reviewBody: 'TestRewviewBody',
    reviewRating: 5,
    reviewLocation: 'Testing Location',
    reviewComments: ["Comment1", "Comment2"]
  }
]

// const friendsSeed = [
//   {
//     friendsOwner: 'Eddie',
//     friendsList: 'None'
//   }
// ]

// const userInfoSeed = [
//   {
//     userName: 'Eddie',
//     userPicture: 'None',
//     userEmail: 'Eddie@noemail.com',
//     userInterest: 'Nothing'
//   }
// ]

// const quickInfoSeed = [
//   {
//     placeEmoji: 'Test',
//     placeTags: '123',
//     placeImage: 'Placeholder if needed'
//   }
// ]

const locationEventsSeed = [
  {
    eventLocation: 'ourTestlocation',
    eventStart: TODAY.getDate(),
    eventEnd: TODAY.getDate()
  }
]

const userSeed = [
  {
    firstName: "Eddie",
    lastName: "Saunders",
    userName: "Admin",
    password: "",
    userEmail: "saunders.eddie@outlook.com",
    friends: ["Richard", "Jason", "Nick", "Tevin"],
    userInterest: ["Beer", "Scotch", "Food"]
  }
]
// EXS When we execture the seedsDB, this removes all entries and then insert the records above
// Optimize this code later
// console.log(db.Friends, db.UserInfo)

db.Places.deleteMany({})
  .then(console.log('Adding Places'))
  .then(() => db.Places.collection.insertMany(placesSeed))
  .then(data => {
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

db.Reviews.deleteMany({})
  .then(console.log('Adding Reviews'))
  .then(() => db.Reviews.collection.insertMany(reviewsSeed))
  .then(data => {
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

// db.Friends.deleteMany({})
//   .then(console.log('Adding Friends'))
//   .then(() => db.Friends.collection.insertMany(friendsSeed))
//   .then(data => {
//     process.exit(0)
//   })
//   .catch(err => {
//     console.error(err)
//     process.exit(1)
//   })

// db.UserInfo.deleteMany({})
//   .then(console.log('Adding UserInfo'))
//   .then(() => db.UserInfo.collection.insertMany(userInfoSeed))
//   .then(data => {
//     process.exit(0)
//   })
//   .catch(err => {
//     console.error(err)
//     process.exit(1)
//   })

// db.QuickInfo.deleteMany({})
//   .then(console.log('Adding QuickInfo'))
//   .then(() => db.QuickInfo.collection.insertMany(quickInfoSeed))
//   .then(data => {
//     process.exit(0)
//   })
//   .catch(err => {
//     console.error(err)
//     process.exit(1)
//   })

db.LocationEvents.deleteMany({})
  .then(console.log('Adding Location Events'))
  .then(() => db.LocationEvents.collection.insertMany(locationEventsSeed))
  .then(data => {
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

db.User.deleteMany({})
  .then(console.log('Adding A User'))
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
