const request = require('supertest');
const app = require('../index');

describe('Todo Controller', () => {
    test('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty('message', 'Data todo berhasil diambil.');
                expect(res.body).toHaveProperty('data');
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    test('should add a new todo', (done) => {
        const newTodo = {
            title: 'New Todo',
        };
        request(app)
            .post('/todos')
            .send(newTodo)
            .expect(201)
            .then((res) => {
                expect(res.body).toHaveProperty('message', 'Tugas baru berhasil ditambahkan.');
                expect(res.body).toHaveProperty('data');
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    test('should update a todo', (done) => {
        const updatedTodo = {
            id: 2, // set id which you want to update
            title: 'Updated Todo',
        };
        request(app)
            .put(`/todos/${updatedTodo.id}`)
            .send(updatedTodo)
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty('message', 'Tugas berhasil diperbarui.');
                expect(res.body).toHaveProperty('data');
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    test('should delete a todo', (done) => {
        const todoId = 4; //set id which you want to delete
        request(app)
            .delete(`/todos/${todoId}`)
            .expect(204)
            .then((res) => {
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    afterAll((done) => {
        // Close server Express
        app.close(() => {
            done();
        });
    });
});
