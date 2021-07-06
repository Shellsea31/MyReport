const router = require('express').Router();
const User = require('../../models'); 

router.post('/:userId', ({ body, params }, res) => {
    User.findOneAndUpdate(
        { _id: params.userId }, 
        { $push: { reports: body } }, 
        { new: true }
    )
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message: "no user with this id found" });
            return;
        }
        res.json(userData)
    })
    .catch(err => res.json(err))
});

module.exports = router; 