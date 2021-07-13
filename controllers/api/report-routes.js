const router = require('express').Router();
const User = require('../../models');

// api/reports/userId/reportId
router.get('/:userId/:reportId', ({ params }, res) => { // get a single report
    User.findOne({ _id: params.userId })
        .select({ reports: { $elemMatch: { _id: params.reportId } } })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: "please make sure a user with this id exists or double check the report id" });
                return;
            }
            res.json(userData)
        })
        .catch(err => res.json(err))
});

// api/reports/month
router.get('/:month', (req, res) => { // find reports by month
    User.find({"reports.month": req.params.month})
    .select('name') // include name in response
    .select({ reports: { $elemMatch: { month: req.params.month } } }) // include report in reponse
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message: "please make sure this user exists"}); 
            return;
        }
        res.json(userData)
    })
    .catch(err => res.json(err)); 
})

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
router.put('/:userId/:reportId', ({ params, body }, res) => { // edit/update a single report
    User.findOneAndUpdate(
        { "_id": params.userId, "reports.reportId": params.reportId },
        { $set: { "reports.$": body } },
        { new: true }
    )
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: "make sure user and report exists!" });
                return;
            }
            res.json(userData);
        })
        .catch(err => res.json(err))
})



// api/reports/userId/reportId
router.delete('/:userId/:reportId', ({ params }, res) => { // delete report 
    User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { reports: { reportId: params.reportId } } },
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