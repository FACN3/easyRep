const authRouter = require('express').Router();
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

authRouter.get('/facebook', passport.authenticate('facebook',
    { scope: ['email'] }
  )
);

authRouter.get('/facebook/callback', passport.authenticate('facebook'),
  (req, res) => {
    res.redirect('/viewreports');
});

authRouter.get('/current_user', requireLogin, (req, res) => {
    res.redirect('/viewreports');
});

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

module.exports = authRouter;
