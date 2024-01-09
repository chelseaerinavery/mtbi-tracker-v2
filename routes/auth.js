const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc Auth with Google 
// @route GET /auth/google
router.get('/google',
    passport.authenticate('google', { scope: ['profile'] }));

// @desc Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/dashboard');
    });

// @desc Logout user
// @route /auth/logout
router.get("/logout", function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});

module.exports = router