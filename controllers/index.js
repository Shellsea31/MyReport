const router = require('express').Router(); 

const apiRoutes = require('./api');

// prefix
router.use('/api', apiRoutes); 

// if request is made to an endpoint that doesnt exist, they'll recieve a 404 error

router.use((req, res) => {
    res.send({msg: "you shouldnt be here"});
}); 


module.exports = router;