// errorHandler.js
// Utility for error handling in the Continuum Tycoon server.
// This utility standardizes the error response format and provides additional error logging.

const errorHandler = (err, req, res, next) => {
    // Log the error for the server side
    console.error(err.stack);

    // Determine the status code: use the status code from the error if it exists, otherwise set to 500
    const statusCode = err.statusCode ? err.statusCode : 500;

    // Send the error response
    res.status(statusCode).json({
        success: false,
        error: err.message || 'Server Error',
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // Include stack trace in non-production environments
    });
};

module.exports = errorHandler;

// Note: This error handler should be used as middleware in your Express app.
// It should be the last middleware added using app.use().
// Example of usage in an Express app:
// const express = require('express');
// const errorHandler = require('./utils/errorHandler');
// const app = express();
// // Other middlewares and routes are added here
// app.use(errorHandler); // Add the error handler middleware at the end
