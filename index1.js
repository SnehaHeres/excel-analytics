const express = require('express');
const connectDB = require('./db');
const app = express();

connectDB(); // Connect to MongoDB

app.use(express.json());

// Your route definitions would go here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
