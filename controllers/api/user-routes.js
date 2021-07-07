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
router.post('/', (req, res) => { // create new user
    User.create({
        name: req.body.name
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err)
        })
});

// /api/users/userId
router.get('/:userId', ({ params }, res) => { // find one user by ID
    User.findOne({ _id: params.userId })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: "couldnt find a user with that id" });
                return
            }
            res.json(userData)
        })
        .catch(err => res.json(err));

});

// api/users/userId
router.put('/:userId', ({ params, body }, res) => { // find user and edit 
    User.findOneAndUpdate(
        { _id: params.userId },
        body,
        { new: true }
    )
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: "no user found with this id" });
                return;
            }
            res.json(userData)
        })
        .catch(err => res.json(err));
})

router.delete('/:userId', ({ params }, res) => { // find user and delete
    User.findOneAndDelete({ _id: params.userId })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: "no user found with this id" });
                return;
            }
            res.json(userData)
        })
        .catch(err => res.json(err))
})



module.exports = router;