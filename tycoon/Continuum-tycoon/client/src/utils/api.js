// src/utils/api.js
// Utility functions to interact with the server API in the Continuum Tycoon application.

import axios from 'axios';

// Base URL for the API. Change this to match your server's address.
const API_BASE_URL = 'http://localhost:5000/api';

// Function to create an instance of axios with default headers
const createAPIInstance = (headers = {}) => {
    return axios.create({
        baseURL: API_BASE_URL,
        headers
    });
};

// Function to handle user registration
export const registerUser = async (userData) => {
    try {
        const api = createAPIInstance();
        const response = await api.post('/users/register', userData);
        return response.data;
    } catch (error) {
        console.error('Error during user registration:', error.response.data);
        throw error;
    }
};

// Function to handle user login
export const loginUser = async (userData) => {
    try {
        const api = createAPIInstance();
        const response = await api.post('/users/login', userData);
        return response.data;
    } catch (error) {
        console.error('Error during user login:', error.response.data);
        throw error;
    }
};

// Function to get the current user's details
export const getCurrentUser = async (token) => {
    try {
        const api = createAPIInstance({ 'x-auth-token': token });
        const response = await api.get('/users/me');
        return response.data;
    } catch (error) {
        console.error('Error fetching current user:', error.response.data);
        throw error;
    }
};

// Additional utility functions to interact with other server endpoints can be added here.
