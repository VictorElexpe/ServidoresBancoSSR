var express = require('express');
var sessionHandler = require('../controllers/sessionHandler');
var clientController = require('../controllers/clientController');
var router = express.Router();

var redirectHome = sessionHandler.redirectHome;
var redirectLogin = sessionHandler.redirectLogin;

router.get('/', redirectHome, function(req, res) {
  res.render('index')
});

router.get('/signup', redirectHome, function(req, res) {
  res.render('signup')
});

router.get('/logout', sessionHandler.logout);

router.post('/login', clientController.login, function(req, res) {
  session = req.session;
  res.redirect('/dashboard');
});

router.get('/dashboard', [redirectLogin, clientController.dashboard]);

module.exports = router;