// EXS 18th July 2020 - Start building out our places controller

const ObjectId = require('mongoose').Types.ObjectId
const db = require('../models')

// Define our methods for the current places, this is currently just a line by line copy of the booksController we did have, so it'll require build out from this point

module.exports = {
    findAll: function (req, res) {
        if (req.user) {
            db.Places.find({ placesCreatedBy: 'Eddie' })
                .populate({ path: 'books', options: { sort: { date: -1 } } })
                .then(users => {
                    res.json({ books: users[0].books })
                })
                .catch(err => res.status(422).json(err))
        } else {
            return res.json({ books: null })
        }
    }
}
