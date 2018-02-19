const authRouter = require('express').Router();
const passport = require('passport');

authRouter.get('/facebook', passport.authenticate('facebook',
    { scope: ['email'] }
  )
);

authRouter.get('/facebook/callback', passport.authenticate('facebook'),
  (req, res) => {
    res.send('success!');
});


module.exports = authRouter;
