// Include the Express module, which allows to use the framework Express.js.
const express = require('express');
const classController = require('../controllers/classes');
const userController = require('../controllers/users');
// New instance of the router, to help define routes.
const router = express.Router();

// Configuring the routes
router.get('/', function(req, res) {
    res.render('index.ejs');
});
router.post('/login', userController.execute.bind(userController));
router.get('/login', function(req, res) {
    res.render('login.ejs');
});
router.get('/dashboard', function(req, res) {
    res.render('dashboard.ejs');
});
router.get('/classes', classController.execute.bind(classController));
router.get('/settings', function(req, res) {
    res.render('settings.ejs');
});

// Export the router as a module.
module.exports = router;