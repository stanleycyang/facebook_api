require('dotenv').load();

var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    User = require('../models/User');

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      return done(null, profile);
  }
));

module.exports = passport;
