// file collects all api routes and packages them up
const router = require('express').Router();

const userRoutes = require('./user-routes.js'); 

// prefixes routes
router.use('/users', userRoutes); 

module.exports = router;