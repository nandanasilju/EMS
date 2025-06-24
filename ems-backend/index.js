const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const db = require('./DB/connectionString');

const app = express();

// Correct Port Handling for Render
const PORT = process.env.PORT || 3000;

// Allow requests from any origin (for development)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Home Route to Fix "Cannot GET /"
app.get('/', (req, res) => {
  res.send('EMS Backend is Running 🚀');
});

// API Routes
app.use('/api/employees', employeeRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`EMS server started on port ${PORT}`);
});
