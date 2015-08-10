var mongoose = require('mongoose');

var SocialSchema = new mongoose.Schema({
    provider: String,
    s_id: String,
    refreshToken: String,
    accessToken: String,
    verified: Boolean,
    gender: String,
    birthday: Date
});

var Social = mongoose.model('Social', SocialSchema);

module.exports = Social;
