const router = require('express').Router()
const placesRoutes = require('./places')
const reviewsRoutes = require('./reviews')
const userInfoRoute = require('./user');

// Places routes
router.use('/places', placesRoutes)

// Reviews routes
router.use('/reviews', reviewsRoutes)

router.use('/user', userInfoRoute)

module.exports = router
