import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Feedback from './pages/Feedback';

const App = () => {
  const containerStyle = { display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f3f4f6' };

  return (
    <Router>
      <div style={containerStyle}>
        <Header />
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
