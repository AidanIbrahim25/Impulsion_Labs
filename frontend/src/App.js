import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Overview from './pages/Overview';
import CaseReports from './pages/CaseReports';
import TrendsInsights from './pages/TrendsInsights';
import ReportsGenerator from './pages/ReportsGenerator';
import CitizenTransparency from './pages/CitizenTransparency';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/case-reports" element={<CaseReports />} />
          <Route path="/trends" element={<TrendsInsights />} />
          <Route path="/reports-generator" element={<ReportsGenerator />} />
          <Route path="/citizen-transparency" element={<CitizenTransparency />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;