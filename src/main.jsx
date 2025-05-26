import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'; // Ensure this is correctly imported

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
  <Route path="/CMT-Acknowledgement" element={<App2 />} />
  </Routes>
  </BrowserRouter>
);