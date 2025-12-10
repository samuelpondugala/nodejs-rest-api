// index.js
// remove dotenv on Render or keep it for local use (ensure dotenv is installed locally)
if (process.env.NODE_ENV !== 'production') {
  // optional: load .env locally (ensure dotenv is installed locally only)
  require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRouter');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', userRouter);

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error('MONGO_URI not set. Set it in Render environment variables.');
} else {
  mongoose.set('strictQuery', false);
  mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
