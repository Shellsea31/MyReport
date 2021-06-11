const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    pName: {
        type: String, 
        required: true, 
        trim: true
    }
}); 

const User = model('User', UserSchema); 

module.exports = User; 
