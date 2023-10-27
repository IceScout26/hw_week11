const express = require('express');
const db = require('../models/todoModel');
const router = express.Router();

// Menampilkan semua todo
router.get('/todos', (req, res) => {
    db.getAllTodos((err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Terjadi kesalahan saat mengambil data todo.',
                error: err
            });
        }
        res.status(200).json({
            message: 'Data todo berhasil diambil.',
            data: result
        });
    });
});

// Menambahkan todo baru
router.post('/todos', (req, res) => {
    const title = req.body.title;

    if (!title) {
        return res.status(400).json({
            message: 'Title tidak boleh kosong.'
        });
    }

    db.addTodo(title, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Terjadi kesalahan saat menambahkan todo.',
                error: err
            });
        }
        res.status(201).json({
            message: 'Tugas baru berhasil ditambahkan.',
            data: result
        });
    });
});

// Memperbarui todo
router.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;

    if (!title) {
        return res.status(400).json({
            message: 'Title tidak boleh kosong.'
        });
    }

    db.updateTodo(id, title, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Terjadi kesalahan saat memperbarui todo.',
                error: err
            });
        }
        if (result) {
            res.status(200).json({
                message: 'Tugas berhasil diperbarui.',
                data: result
            });
        } else {
            res.status(404).json({
                message: 'Todo tidak ditemukan.'
            });
        }
    });
});

// Menghapus todo
router.delete('/todos/:id', (req, res) => {
    const id = req.params.id;

    db.deleteTodo(id, (err) => {
        if (err) {
            return res.status(500).json({
                message: 'Terjadi kesalahan saat menghapus todo.',
                error: err
            });
        }
        res.status(204).send();
    });
});

module.exports = router;
