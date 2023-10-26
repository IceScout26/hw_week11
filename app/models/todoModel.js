const db = require('../config/dbConfig');

const getAllTodos = (callback) => {
    db.query('SELECT * FROM todo', (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results.rows);
    });
};

module.exports = {
    getAllTodos,
};