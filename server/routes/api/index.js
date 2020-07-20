const router = require('express').Router()
//const placesRoutes = require('./places')
const reviewsRoutes = require('./reviews')

// Places routes
//router.use('/places', placesRoutes)

// Reviews routes
router.use('/reviews', reviewsRoutes)

module.exports = router
