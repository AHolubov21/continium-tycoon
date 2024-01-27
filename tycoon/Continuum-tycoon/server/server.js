// server.js
// Main entry point for the Continuum Tycoon server.

// Import necessary Node.js modules.
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Initialize environment variables.
dotenv.config();

// Import the database connection function.
const connectDB = require('./config/db');

// Import route handlers.
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');

// Create the Express application.
const app = express();

// Connect to MongoDB database.
connectDB();

// Middlewares to parse JSON and handle CORS and security.
app.use(express.json());
app.use(cors());
app.use(helmet());

// Logger to help during development.
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes handling.
// Here we link the route files we have to the express application.
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);

// Error handling middleware.
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

// Start the server on the specified port.
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections.
// This is a safety net for unexpected errors in asynchronous code.
process.on('unhandledRejection', (err, promise) => {
  console.log(`Unhandled Rejection: ${err.message}`);
  // Close the server & exit process.
  server.close(() => process.exit(1));
});
