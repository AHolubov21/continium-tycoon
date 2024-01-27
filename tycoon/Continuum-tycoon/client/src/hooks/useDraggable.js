// src/hooks/useDraggable.js
// Custom hook to add drag-and-drop functionality to components in the Continuum Tycoon app.

import { useState, useEffect } from 'react';

// This hook allows elements to be draggable.
// You can attach this hook to any component to make it draggable.
const useDraggable = (ref) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Event handlers for mouse events
    const handleMouseDown = (event) => {
        setIsDragging(true);
        setPosition({
            x: event.pageX - ref.current.offsetLeft,
            y: event.pageY - ref.current.offsetTop
        });
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            ref.current.style.left = `${event.pageX - position.x}px`;
            ref.current.style.top = `${event.pageY - position.y}px`;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        // Add event listeners to the document for dragging functionality
        if (ref.current) {
            ref.current.addEventListener('mousedown', handleMouseDown);
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        // Cleanup function to remove event listeners
        return () => {
            if (ref.current) {
                ref.current.removeEventListener('mousedown', handleMouseDown);
            }
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, position, ref]);

    return {
        isDragging,
        position
    };
};

export default useDraggable;
