// User.js
// This file defines the User model for the Continuum Tycoon application
// using Mongoose, which is an ODM (Object Data Modeling) library for MongoDB and Node.js.

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Creating a schema for the User model.
// A schema defines the structure of the document, default values, validators, etc.
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'], // Validation: username must be provided
        unique: true, // Ensures usernames are unique in the database
        trim: true, // Trims whitespace from the username
        minlength: [3, 'Username must be at least 3 characters long'] // Validation for minimum length
    },
    email: {
        type: String,
        required: [true, 'Email is required'], // Validation: email must be provided
        unique: true, // Ensures emails are unique in the database
        trim: true, // Trims whitespace from the email
        lowercase: true, // Converts email to lowercase
        match: [/.+\@.+\..+/, 'Please enter a valid email address'] // Validation for email format
    },
    password: {
        type: String,
        required: [true, 'Password is required'], // Validation: password must be provided
        minlength: [6, 'Password must be at least 6 characters long'] // Validation for minimum length
    },
    // You can add additional fields here based on your project requirements.
});

// Pre-save hook to hash the password before saving it to the database
userSchema.pre('save', async function(next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();

    // Hashing the password with bcrypt
    this.password = await bcrypt.hash(this.password, 10); // 10 is the number of salt rounds
    next();
});

// Method to compare a candidate password with the user's password
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Exporting the User model
// mongoose.model() is used to create a new model with the defined schema.
module.exports = mongoose.model('User', userSchema);
