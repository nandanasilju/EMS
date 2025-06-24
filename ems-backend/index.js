const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
require('./DB/connectionString'); // Database connection file

const app = express();

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Optional: To verify the server is running
app.get('/', (req, res) => {
  res.send({ message: "EMS Backend Running ✅" });
});

// Correctly register API routes
app.use('/', employeeRoutes);

// Server Listening on Render's port
const PORT = process.env.PORT || 3000; // Important for Render
app.listen(PORT, () => {
  console.log(`EMS server started on port ${PORT}`);
});
