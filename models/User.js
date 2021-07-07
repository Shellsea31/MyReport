const { Schema, model, Types } = require('mongoose');

//report model
const ReportSchema = new Schema({
    reportId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
    },
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

// user model
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true, 
        unique: true
    },
    reports: [ReportSchema]
},
    {
        toJSON: {
            virtuals: false,
            getters: false
        },
        id: false
    });

const User = model('User', UserSchema);

module.exports = User;
