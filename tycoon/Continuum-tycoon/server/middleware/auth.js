// auth.js
// Middleware for authenticating users in the Continuum Tycoon server.
// This middleware checks if the user is authenticated before allowing access to certain routes.

const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware function to authenticate a user
module.exports = async (req, res, next) => {
    // Check for the token in the header
    const token = req.header('x-auth-token');

    // If no token, deny access
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Add user from payload
        req.user = await User.findById(decoded.user.id).select('-password');

        next(); // Move on to the next middleware
    } catch (err) {
        console.error(err.message);
        res.status(401).json({ msg: 'Token is not valid' });
    }
};
