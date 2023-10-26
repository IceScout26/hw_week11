const express = require('express');
const db = require('../config/dbconfig'); // Impor konfigurasi database

const router = express.Router();

// Endpoint untuk mendapatkan daftar todo
router.get('/todos', (req, res) => {
    db.query('SELECT * FROM todo', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

module.exports = router;