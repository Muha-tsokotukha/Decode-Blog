const express = require("express");
const router = express.Router();
const User = require('../user/User');
const passport = require("passport");
const {registrationValidator} = require("./middlewares");
const {signUp,signInLocal, signOut,googleCallback} = require('./controller');

router.post("/api/auth/signup", registrationValidator, signUp);

router.post('/api/auth/signin', passport.authenticate('local', { failureRedirect: '/login?error=1' }),signInLocal);

router.get('/api/auth/signout', signOut );

router.get('/api/auth/google/signin',passport.authenticate('google'));

router.get('/api/auth/google', passport.authenticate('google', { failureRedirect: '/login?error=2' }),googleCallback);

module.exports = router;