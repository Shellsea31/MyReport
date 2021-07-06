const router = require('express').Router();
const Report = require('../../models');
const User = require('../../models'); 

router.get('/', (req, res) => {
    Report.find({})
    .then(reportData => res.json(reportData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:reportId', (req, res) => {
    Report.findOne({ _id: req.params.thoughtId })
    .then(reportData => {
        if (!reportData) {
            res.status(404).json({ message: "no report found with this id" });
            return;
        }
        res.json(reportData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
})

// create report at /report/:userId
router.post('/:userId', ({ body, params}, res) => {
        Report.create(body)
            .then(({ _id }) => {
                console.log(_id)
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { reports: _id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({
                        message:
                            "no report found with this id"
                    });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
}); 

module.exports = router; 