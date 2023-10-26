const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.get('/todos', todoController.getTodos);
router.post('/todos', todoController.addTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
