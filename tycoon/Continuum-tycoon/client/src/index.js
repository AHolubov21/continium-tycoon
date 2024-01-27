// src/index.js
// Entry point for the Continuum Tycoon client application.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Main CSS file for styling
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals';

// If you have a Redux store, you can import and configure it here
// import { Provider } from 'react-redux';
// import store from './store';

// If you're using React Router, you can set it up here
// import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* The Provider wrapper will make Redux store available to your app */}
    {/* <Provider store={store}> */}
      {/* Router component to handle navigation */}
      {/* <Router> */}
        <App />
      {/* </Router> */}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you're using web vitals, you can report them with the following function
// reportWebVitals(console.log);
