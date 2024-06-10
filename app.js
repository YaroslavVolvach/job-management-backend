const express = require('express');
const connectDB = require('./db');
const jobRoutes = require('./routes/jobs');
const cors = require('cors'); // Import cors

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data

// Connect to MongoDB
connectDB();

// Use job routes
app.use('/jobs', jobRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
