const todoModel = require('../models/todoModel');

const getTodos = (req, res) => {
    todoModel.getAllTodos((error, todos) => {
        if (error) {
            return res.status(500).json({
                error: 'Gagal mengambil data todo.'
            });
        }
        res.status(200).json({
            message: 'Data todo berhasil diambil.',
            data: todos
        });
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
        res.status(201).json({
            message: 'Tugas baru berhasil ditambahkan.',
            data: todo
        });
    });
};

const updateTodo = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if (!id) {
        return res.status(400).json({
            error: 'ID tugas tidak valid.'
        });
    }

    todoModel.updateTodo(id, title, (error, todo) => {
        if (error) {
            return res.status(500).json({
                error: 'Gagal memperbarui tugas.'
            });
        }
        // Perbarui respons Anda untuk mencakup 'message' dan 'data'
        res.status(200).json({
            message: 'Tugas berhasil diperbarui.',
            data: todo
        });
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
        res.status(204).json({
            message: 'Tugas berhasil dihapus.'
        });
    });
};

module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
};
