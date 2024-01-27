// src/components/Toolbar/ToolSelector.js
// ToolSelector component for the Continuum Tycoon application.
// This component allows users to select different tools and elements for editing the park map.

import React from 'react';
import './ToolSelector.css'; // Import your CSS styles for the tool selector

const ToolSelector = ({ onToolSelected }) => {
    // You can define various tools here. For example: 'select', 'move', 'draw-path', 'place-element', etc.
    const tools = ['Select', 'Move', 'Draw Path', 'Place Element'];

    return (
        <div className="tool-selector">
            <h3>Tools</h3>
            <ul>
                {tools.map(tool => (
                    <li key={tool}>
                        <button onClick={() => onToolSelected(tool)}>
                            {tool}
                        </button>
                    </li>
                ))}
            </ul>
            {/* You can extend this component to include more tools or options as needed */}
        </div>
    );
};

export default ToolSelector;
