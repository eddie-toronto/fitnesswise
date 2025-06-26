// filepath: /fitnesswise/fitnesswise/src/main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/styles.js'; // Importing CSS-in-JS styles

// Initialize the app and render the main component
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);