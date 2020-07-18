const router = require('express').Router()
const placesRoutes = require('./places')

// Book routes
router.use('/places', placesRoutes)

module.exports = router
