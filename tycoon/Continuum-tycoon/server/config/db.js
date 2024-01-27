// db.js
// Configuration for the MongoDB connection.

const mongoose = require('mongoose');

// Function to connect to the database
const connectDB = async () => {
    try {
        // Try to connect to MongoDB using the connection string from the .env file
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        // If the connection is successful, log a confirmation message
        console.log('MongoDB connection established successfully.');
    } catch (error) {
        // If the connection fails, log the error message
        console.error('MongoDB connection failed:', error.message);

        // Exit the application with failure code
        process.exit(1);
    }
};

// Export the connectDB function so it can be used by other parts of our application
module.exports = connectDB;
