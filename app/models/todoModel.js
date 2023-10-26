const db = require('../config/dbConfig');

const getAllTodos = (callback) => {
    db.query('SELECT * FROM todo', (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results.rows);
    });
};

const addTodo = (title, callback) => {
    const query = {
        text: 'INSERT INTO todo (title) VALUES ($1) RETURNING *',
        values: [title],
    };

    db.query(query, (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results.rows[0]);
    });
};

const updateTodo = (id, title, callback) => {
    const query = {
        text: 'UPDATE todo SET title = $1 WHERE id = $2 RETURNING *',
        values: [title, id],
    };

    db.query(query, (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results.rows[0]);
    });
};

const deleteTodo = (id, callback) => {
    const query = {
        text: 'DELETE FROM todo WHERE id = $1',
        values: [id],
    };

    db.query(query, (error) => {
        if (error) {
            return callback(error);
        }
        callback(null);
    });
};

module.exports = {
    getAllTodos,
    addTodo,
    updateTodo,
    deleteTodo,
};