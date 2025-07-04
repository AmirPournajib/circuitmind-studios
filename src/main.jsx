import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import WorkshopPage from './pages/WorkshopPage';
import CoachingPage from './pages/CoachingPage';
import PoCPage from './pages/PoCPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/workshops/ml" element={<WorkshopPage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/poc" element={<PoCPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
