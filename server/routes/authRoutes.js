const authRouter = require('express').Router();
const passport = require('passport');

authRouter.get('/facebook', passport.authenticate('facebook',
    { scope: ['email'] }
  )
);

authRouter.get('/facebook/callback', passport.authenticate('facebook'),
  (req, res) => {
    res.redirect('/viewreports');
});

authRouter.get('/current_user', (req, res) => {
  console.log(req.headers);
    res.send(req.headers);
});

module.exports = authRouter;
