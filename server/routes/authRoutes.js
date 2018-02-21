const router = require('express').Router();
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/facebook/callback', passport.authenticate('facebook'), (req, res) => {
  res.redirect('/viewreports');
});

router.get('/google', passport.authenticate('google', { scope: ['email'] }));

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/viewreports');
});

router.get('/current_user', requireLogin, (req, res) => {
  res.redirect('/viewreports');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
