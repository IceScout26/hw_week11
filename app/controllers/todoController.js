const todoModel = require('../models/todoModel');

const getTodos = (req, res) => {
    todoModel.getAllTodos((error, todos) => {
        if (error) {
            return res.status(500).json({
                error: 'Gagal mengambil data todo.'
            });
        }
        res.status(200).json(todos);
    });
};

module.exports = {
    getTodos,
};