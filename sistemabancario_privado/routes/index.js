var express = require('express');
var sessionHandler = require('../controllers/sessionHandler');
var bankController = require('../controllers/bankController');
var router = express.Router();

var redirectHome = sessionHandler.redirectHome;
var redirectLogin = sessionHandler.redirectLogin;

router.get('/', redirectHome, function(req, res) {
  res.render('index')
});

router.get('/login', redirectHome, function(req, res) {  
  res.render('login')
});

router.post('/login', bankController.login, function(req, res) {
  res.redirect('/dashboard')
});

router.get('/signup', redirectHome, function(req, res) {
  res.render('signup')
});

router.post('/signup', bankController.signup);

router.get('/logout', sessionHandler.logout);

router.get('/getAllClients', [redirectLogin, bankController.getAllClients]);
router.get('/getAllEmployees', [redirectLogin, bankController.getAllEmployees]);

router.get('/dashboard', [redirectLogin, bankController.dashboard]);

router.post('/newClient', [redirectLogin, bankController.newClient], function(req, res) {
  res.redirect('/dashboard')
});

module.exports = router;