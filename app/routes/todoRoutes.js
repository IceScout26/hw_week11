const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

// Rute untuk mendapatkan daftar todo
router.get('/todos', todoController.getTodos);

module.exports = router;
