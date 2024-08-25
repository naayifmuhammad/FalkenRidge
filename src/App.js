import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/global.css';
import Navbar from './components/Navbar';
import HeaderBanner from './components/HeaderBanner';
import Projects from './components/Projects';
import Team from './components/Team';
import TermsAndConditions from './components/TermsAndConditions'
import Footer from './components/Footer';
import Careers from './components/CareersPage';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeaderBanner />
                  <Projects />
                  <Team />
                </>
              }
            />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
