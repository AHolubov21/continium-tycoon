// projectController.js
// Controllers for handling project-related requests in the Continuum Tycoon server.

const Project = require('../models/Project');

// @desc    Create a new project
// @route   POST /api/projects
// @access  Private
exports.createProject = async (req, res) => {
    try {
        const { name, description, elements, routes } = req.body;

        // Create a new project instance
        const project = new Project({
            name,
            description,
            createdBy: req.user.id, // Set the creator of the project
            elements,
            routes
        });

        // Save the project in the database
        await project.save();

        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// @desc    Get all projects of a user
// @route   GET /api/projects
// @access  Private
exports.getProjects = async (req, res) => {
    try {
        // Find all projects created by the user
        const projects = await Project.find({ createdBy: req.user.id });
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// @desc    Get a single project by ID
// @route   GET /api/projects/:id
// @access  Private
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        // Check if the project exists and is owned by the user
        if (!project || project.createdBy.toString() !== req.user.id) {
            return res.status(404).json({ msg: 'Project not found or user not authorized' });
        }

        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Additional controllers can be implemented here for updating and deleting projects

// These controllers will be used in the projectRoutes.js file to handle API requests
