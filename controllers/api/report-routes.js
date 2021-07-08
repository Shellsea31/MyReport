const router = require('express').Router();
const User = require('../../models');



// /api/reports/userId
router.post('/:userId', ({ body, params }, res) => { // make a report
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

// api/reports/userId/reportId
router.delete('/:userId/:reportId', ({ params }, res) => { // delete report 
    User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { reports: { _id: params.reportId } } },
        { new: true }
    )
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: "something went wrong. please make sure this user and report exists!" });
                return;
            }
            res.json(userData)
        })
        .catch(err => res.json(err))
});

module.exports = router;