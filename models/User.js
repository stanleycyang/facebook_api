var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    facebook: {
        name: String    
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
