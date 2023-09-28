import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './index.css';
import App from './App';
import Welcome from './welcome';
import Login from './login';
import Calculator from './calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Welcome />} /> 
        <Route path="/app" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calculator" element={<Calculator />} />

      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
