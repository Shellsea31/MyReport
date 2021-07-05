const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        trim: true
    }, 
    reports: [{
        type: Schema.Types.ObjectId, 
        ref: 'Report'
    }]
}); 

const User = model('User', UserSchema); 

module.exports = User; 
