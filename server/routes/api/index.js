const router = require('express').Router()
const placesRoutes = require('./places')
const reviewsRoutes = require('./reviews')

// Places routes
router.use('/places', placesRoutes)

<<<<<<< HEAD
=======
// Reviews routes
router.use('/reviews', reviewsRoutes)

>>>>>>> 0a604755e49e8b486eb9be7b113ea6912210e240
module.exports = router
