const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

//Home Routing 
router.get('/', homeController.indexFunction);
router.get('/about', homeController.aboutFunction);
router.get('/login', homeController.loginFunction);
router.get('/users', homeController.getAllUser);
router.post('/users', homeController.createUser);
// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;