// app.js
// This is the main application setup file for the Continuum Tycoon server.
// Here, we configure our Express application, set up middleware, and define our routes.

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Initialize the Express application
const app = express();

// Apply various security protections
app.use(helmet());

// Enable CORS with various options
app.use(cors());

// Built-in middleware for json
app.use(express.json());

// Import route handlers
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');

// Use routes for our application
// This will mount these routers on a specific path prefix.
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);

// Error handling middleware
// This will catch any errors that are thrown within our routing code.
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the stacktrace of any errors that occur
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message, // Send the error message to the client
    // Stack trace should not be returned in production for security reasons
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
});

module.exports = app;
