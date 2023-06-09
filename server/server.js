const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todo');
const cors = require('cors');
require('dotenv').config();

// Inisialisasi aplikasi Express
const app = express();
app.use(cors());
app.use(express.json());

// Middleware
app.use(express.json());

// Konfigurasi koneksi MongoDB
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('MongoDB connection error:', error));

// Mengatur route todos
app.use('/api/todos', todoRoutes);

// Menjalankan server pada port yang ditentukan
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
