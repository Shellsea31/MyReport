const { Schema, model } = require('mongoose');

const ReportSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    hours: {
        type: Number,
        required: true,
        trim: true
    },
    publications: {
        type: Number,
        trim: true
    },
    videos: {
        type: Number,
        trim: true
    },
    returnVisits: {
        type: Number,
        trim: true
    },
    studies: {
        type: Number,
        trim: true
    },
    month: {
        type: String,
        required: true,
        trim: true
    }
},
    {
        toJSON: {
            getters: false,
            virtuals: false
        },
        id: false
    });

const Report = model('Report', ReportSchema);

module.exports = Report;