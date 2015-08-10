var mongoose = require('mongoose');

var Social = mongoose.model('Social');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    social: [Social.schema],
    updated: {
        type: Date,
        default: Date.now
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
