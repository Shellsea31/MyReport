const router = require('express').Router();
const User = require('../../models');


// /api/users
router.get('/', (req, res) => { // get all users 
    User.find({})
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// /api/users
router.post('/', (req, res) => {
    User.create({
        name: req.body.name
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err)
        })
}); 

module.exports = router;