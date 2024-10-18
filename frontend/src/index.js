import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';    // Existing styles
import './styles.css';   // New styles for all components

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
