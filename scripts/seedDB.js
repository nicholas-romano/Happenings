const mongoose = require('mongoose')
const db = require('../models')

// This file empties the Places collection and inserts the places below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/happenings-app', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
)
.then(() => console.log('DB Connected!'))
.catch(err => {
  console.log(`DB Connection Error: ${err.message}`);
});

console.log('Inside seedDB.js')

const places = [
  {
    placeName: 'myTestPlaceName',
    placeAddress: '123 Main St',
    placeEvent: 'None',
    placeEventStart: 'eventStart',
    placeEventFinish: 'eventFinish',
    placeCreatedBy: 'Eddie'
  }
]

db.Places.deleteMany({})
  .then(() => db.Places.collection.insertMany(places))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
