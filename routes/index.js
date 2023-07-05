// Include the Express module, which allows to use the framework Express.js.
const express = require('express');

// New instance of the router, to help define routes.
const router = express.Router();

// Configuring the routes
router.get('/', function(req, res) {
    res.render('index.ejs');
});
router.get('/login', function(req, res) {
    res.render('login', {vascao: "pes"});
});
router.get('/dashboard', function(req, res) {
    res.render('dashboard.ejs');
});
router.get('/classes', function(req, res) {
    res.render('classes.ejs');
});
router.get('/settings', function(req, res) {
    res.render('settings.ejs');
});

// Export the router as a module.
module.exports = router;