const { Schema, model } = require('mongoose');

const ReportSchema = new Schema({
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
}); 

const Report = model('Report', ReportSchema); 

module.exports = Report; 