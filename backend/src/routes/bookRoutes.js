const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const homeController = require('../controllers/homeController');
router.post('/books', bookController.createBook);
router.get('/books', bookController.getAllBooks);

//Home Routing 
router.get('/', homeController.indexFunction);
router.get('/about', homeController.aboutFunction);


// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;