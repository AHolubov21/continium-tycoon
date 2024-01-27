// Project.js
// This file defines the Project model for the Continuum Tycoon server application.
// It uses Mongoose, a MongoDB object modeling tool, to create a schema for the project data.

const mongoose = require('mongoose');

// Define a schema for the Project model.
// This schema represents the structure of a project's data in the database.
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Project name is required'], // Validation to ensure a name is provided
        trim: true // Removes whitespace from both ends of a string
    },
    description: {
        type: String,
        trim: true // Optional description field with trimmed whitespace
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // References the User model
        required: [true, 'Project must have a creator']
    },
    elements: [{
        type: mongoose.Schema.Types.Mixed, // Flexible field to store various types of elements
        required: true
    }],
    routes: [{
        from: String,
        to: String,
        time: Number // Time to move from one point to another
    }],
    // Additional attributes like configurations, settings, etc., can be added here.
    // Feel free to customize this schema based on your project's requirements.
}, { timestamps: true }); // Enable automatic creation of createdAt and updatedAt fields

// Exporting the Project model
// mongoose.model() creates a new model with the provided schema.
module.exports = mongoose.model('Project', projectSchema);
