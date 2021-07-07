// file collects all api routes and packages them up
const router = require('express').Router();

const userRoutes = require('./user-routes.js'); 
const reportRoutes = require('./report-routes'); 

// prefixes routes
router.use('/users', userRoutes); 
router.use('/reports', reportRoutes)

module.exports = router;