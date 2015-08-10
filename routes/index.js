var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/home', isLoggedIn, function(req, res, next) {
    console.log(req.user);
  res.render('index', { title: 'Express', user: req.user });
});

// Log in
router.get('/login', function(request, response, next){
    response.render('login', {title: 'Log in'});
});

router.get('/logout', function(request, response, next){
    request.logout();
    response.redirect('/login');
});

// Facebook routes
router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email', 'user_birthday', 'user_location']}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect: '/home', failureRedirect: '/login'}));

function isLoggedIn(request, response, next){
    if(request.isAuthenticated()){return next();}
    response.redirect('/login');
}

module.exports = router;
