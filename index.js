require('dotenv').config(); 
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', userRouter);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error('MONGO_URI not set. Set it in Render environment variables or .env locally.');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  }).then(() => {
  console.log("MongoDB connected successfully");
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}).catch((err) => {
  console.error("Error connecting to MongoDB Atlas:", err);
});
