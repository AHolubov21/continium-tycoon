Continium-tycoon/
│
├── client/                     # Client-side (React)
│   ├── public/                 # Static files
│   │   ├── index.html          # Main HTML file
│   │   └── assets/             # Images, icons, and other media files
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── MapEditor/      # Map editor component for the attractions
│   │   │   │   ├── MapCanvas.js  # Canvas for map interaction and rendering
│   │   │   │   └── ...          # Other components and utilities for the Map Editor
│   │   │   ├── Toolbar/        # Toolbar component for selecting park elements
│   │   │   │   ├── ToolSelector.js # Component to select tools and elements
│   │   │   │   └── ...          # Additional toolbar-related components
│   │   │   └── ...
│   │   ├── pages/              # Application pages
│   │   │   ├── Home/           # Home page component
│   │   │   │   ├── Home.js      # Home page implementation
│   │   │   │   └── ...          # Any other home page specific components
│   │   │   ├── ProjectViewer/  # Project Viewer page for viewing and editing projects
│   │   │   │   ├── ProjectViewer.js # Main component for the Project Viewer page
│   │   │   │   └── ...          # Other components specific to the Project Viewer
│   │   │   └── ...
│   │   ├── app/                # Main application component
│   │   │   ├── App.js          # Main App component tying everything together
│   │   │   └── ...
│   │   ├── hooks/              # Custom React hooks
│   │   │   ├── useDraggable.js  # Hook for draggable functionality
│   │   │   └── ...
│   │   ├── utils/              # Utility functions
│   │   │   ├── api.js          # Utility for API calls
│   │   │   └── ...
│   │   ├── styles/             # Application styles (CSS/SCSS)
│   │   │   ├── main.scss       # Main stylesheet
│   │   │   └── ...
│   │   └── index.js            # Entry point for the React application
│   ├── package.json            # Client dependencies and scripts
│   └── ...
│
├── server/                     # Server-side (Node.js, Express)
│   ├── config/                 # Configuration files (e.g., database configs)
│   │   ├── db.js               # Database connection setup
│   │   └── ...
│   ├── models/                 # Mongoose models for MongoDB
│   │   ├── Project.js          # Park project model
│   │   ├── User.js             # User model
│   │   └── ...
│   ├── routes/                 # Express routes
│   │   ├── projectRoutes.js    # Routes for project management
│   │   ├── userRoutes.js       # Routes for authentication and user management
│   │   └── ...
│   ├── middleware/             # Middleware
│   │   ├── auth.js             # Authentication middleware
│   │   └── ...
│   ├── controllers/            # Controllers for handling requests
│   │   ├── projectController.js # Controller for project actions
│   │   ├── userController.js    # Controller for user actions
│   │   └── ...
│   ├── utils/                  # Server utility functions
│   │   ├── errorHandler.js     # Error handling utilities
│   │   └── ...
│   ├── app.js                  # Setup of the Express application
│   └── server.js               # Entry point for the server
│   ├── package.json            # Server dependencies and scripts
│   └── ...
│
├── .env                        # Environment variables (e.g., DB connection strings)
├── .gitignore                  # Files/folders ignored by Git
├── README.md                   # Project documentation
└── package.json                # General scripts and dependencies 