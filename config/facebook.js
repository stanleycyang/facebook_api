require('dotenv').load();

var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    Social = require('../models/Social'),
    User = require('../models/User');

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      // Find the user
      User.findOne({email: profile._json.email}, function(error, person){
          // If person doesn't exist, create them
          if(!person){
            var user = new User();

            // Set the name, email, and social
            user.name = profile._json.name;
            user.email = profile._json.email;

            user.social.push({
                provider: profile.provider,
                refreshToken: refreshToken,
                accessToken: accessToken,
                verified: profile._json.verified,
                gender: profile._json.gender,
                birthday: profile._json.birthday     
            });

            user.save(function(error, user){
                if(error) response.json({success: false, error: 'User did not create'});
                console.log(user);
            });
          }
          console.log(person.social);


          // User is already in database
          console.log('already in');
      });


      done(null, profile);


  }
));

module.exports = passport;
