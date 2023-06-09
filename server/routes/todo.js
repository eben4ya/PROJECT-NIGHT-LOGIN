const express = require('express');
const router = express.Router();
const Todo = require('../models/modelTodo');

// Mendapatkan daftar todos
router.get('/', (req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((error) => res.status(400).json({ error }));
});

// Menambahkan todo baru
router.post('/', (req, res) => {
  const { content, category } = req.body;
  const newTodo = new Todo({
    content,
    category,
    done: false,
    createdAt: new Date().getTime(),
  });
  newTodo
    .save()
    .then(() => res.json({ message: 'Todo added successfully' }))
    .catch((error) => res.status(400).json({ error }));
});

// Mengupdate todo
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { content, category, done } = req.body;
  Todo.findByIdAndUpdate(id, { content, category, done }, { new: true })
    .then(() => res.json({ message: 'Todo updated successfully' }))
    .catch((error) => res.status(400).json({ error }));
});

// Menghapus todo
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Todo.findByIdAndRemove(id)
    .then(() => res.json({ message: 'Todo deleted successfully' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
