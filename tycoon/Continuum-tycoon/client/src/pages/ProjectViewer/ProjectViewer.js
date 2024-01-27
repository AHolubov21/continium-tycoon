// src/pages/ProjectViewer/ProjectViewer.js
// ProjectViewer component for the Continuum Tycoon application.
// This component is responsible for displaying and managing individual projects.

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectViewer.css'; // Import your CSS styles for ProjectViewer

// Import any additional components or utilities you might need
import MapEditor from '../../components/MapEditor/MapCanvas';
import { getProjectById } from '../../utils/api';

const ProjectViewer = () => {
    const { projectId } = useParams(); // Retrieve the project ID from URL parameters
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Fetch the project details from the server when the component mounts
        getProjectById(projectId)
            .then(data => setProject(data))
            .catch(error => console.error('Error fetching project:', error));
    }, [projectId]);

    if (!project) {
        return <div>Loading project...</div>;
    }

    return (
        <div className="project-viewer">
            <h1>{project.name}</h1>
            <p>{project.description}</p>

            {/* MapEditor component to display and edit the project map */}
            <MapEditor project={project} />

            {/* Additional UI elements for project management can be added here */}
            {/* For example, buttons to save changes, add new elements, etc. */}
        </div>
    );
};

export default ProjectViewer;
