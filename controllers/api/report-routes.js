const router = require('express').Router();
const Report = require('../../models');
const User = require('../../models'); 

// create report at /report/:userId
router.post('/:userId', ({ body, params}, res) => {
    Report.create(body)
    .then(({ _id }) => {
        // console.log({ _id })
        return User.findOneAndUpdate(
            { _id: params.userId }, 
            { $push: { reports: _id }}, 
            { new: true }
        )
    })
    .then(reportData => {
        if (!reportData) {
            res.status(404).json({
                message: "no report with this id was found"
            }); 
            return
        }
        res.json(reportData)
    })
    .catch(err => res.json(err))
}); 

module.exports = router; 