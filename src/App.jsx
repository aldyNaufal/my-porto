import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './controller/MainPage';
import ContactPage from './controller/ContactPage';
import DataSciencePage from './controller/DataSciencePage';
import MachineLearningPage from './controller/MachineLearningPage';
import WebMobilePage from './controller/WebMobilesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/data-science" element={<DataSciencePage />} />
        <Route path="/projects/machine-learning" element={<MachineLearningPage />} />
        <Route path="/projects/web-mobile" element={<WebMobilePage />} />
      </Routes>
    </Router>
  );
}

export default App;