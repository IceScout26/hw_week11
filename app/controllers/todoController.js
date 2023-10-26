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

const addTodo = (req, res) => {
    const {
        title
    } = req.body;
    todoModel.addTodo(title, (error, todo) => {
        if (error) {
            return res.status(500).json({
                error: 'Gagal menambahkan tugas baru.'
            });
        }
        res.status(201).json(todo);
    });
};

const updateTodo = (req, res) => {
    const {
        id
    } = req.params;
    const {
        title
    } = req.body;

    todoModel.updateTodo(id, title, (error, todo) => {
        if (error) {
            return res.status(500).json({
                error: 'Gagal memperbarui tugas.'
            });
        }
        res.status(200).json(todo);
    });
};

const deleteTodo = (req, res) => {
    const {
        id
    } = req.params;

    todoModel.deleteTodo(id, (error) => {
        if (error) {
            return res.status(500).json({
                error: 'Gagal menghapus tugas.'
            });
        }
        res.status(204).send();
    });
};

module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
};