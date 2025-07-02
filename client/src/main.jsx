import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InterviewPage from './pages/InterviewPage';
import ResumeInterviewPage from './pages/ResumeInterviewPage';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/resume" element={<ResumeInterviewPage />} />
    </Routes>
  </BrowserRouter>
);

