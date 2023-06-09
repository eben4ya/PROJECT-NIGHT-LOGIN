const mongoose = require('mongoose');

// Skema Todo
const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Membuat model Todo
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
