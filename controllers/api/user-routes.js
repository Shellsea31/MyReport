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

// /api/users/userId
router.get('/:userId', ({ params }, res) => {
    User.findOne({ _id: params.userId })
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message: "couldnt find a user with that id" }); 
            return
        }
        res.json(userData)
    })
    .catch(err => res.json(err)); 
    
})



module.exports = router;