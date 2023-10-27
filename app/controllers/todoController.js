const request = require('supertest');
const app = require('../app/controllers/todoController'); // Sesuaikan dengan jalur yang benar ke kontroler Anda

describe('Todo Controller', () => {
    test('should get all todos', (done) => {
        request(app)
            .get('/todos') // Sesuaikan dengan rute yang benar
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
            title: 'New Todo'
        };
        request(app)
            .post('/todos') // Sesuaikan dengan rute yang benar
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
            id: 1,
            title: 'Updated Todo'
        };
        request(app)
            .put(`/todos/${updatedTodo.id}`) // Sesuaikan dengan rute yang benar
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
        const todoId = 1;
        request(app)
            .delete(`/todos/${todoId}`) // Sesuaikan dengan rute yang benar
            .expect(204)
            .then((res) => {
                done();
            })
            .catch((err) => {
                done(err);
            });
    });
});