// projectRoutes.js
// Routes for managing projects in the Continuum Tycoon server.
// These routes handle the creation, retrieval, updating, and deletion of projects.

const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Middleware to protect routes
const protect = require('../middleware/auth');

// @route   POST /api/projects
// @desc    Create a new project
// @access  Private
router.post('/', protect, async (req, res) => {
    const { name, description, elements, routes } = req.body;

    try {
        // Create a new project instance
        const newProject = new Project({
            name,
            description,
            createdBy: req.user.id, // Set the creator of the project
            elements,
            routes
        });

        // Save the project to the database
        const project = await newProject.save();

        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET /api/projects
// @desc    Get all projects
// @access  Private
router.get('/', protect, async (req, res) => {
    try {
        // Find all projects created by the user
        const projects = await Project.find({ createdBy: req.user.id });
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET /api/projects/:id
// @desc    Get a single project by ID
// @access  Private
router.get('/:id', protect, async (req, res) => {
    try {
        // Find the project by ID
        const project = await Project.findById(req.params.id);

        // Check if project exists
        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        // Check user
        if (project.createdBy.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        res.json(project);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Project not found' });
        }
        res.status(500).send('Server error');
    }
});

// Additional routes can be added here for updating and deleting projects

// Export the router
module.exports = router;
