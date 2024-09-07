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
// import MissionAndVision from './components/MissionAndVision';
// import SmoothScroll from "smooth-scroll";
import Contact from "./components/Contact"
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import SoftwareDevelopment from './components/SoftwareDevelopment';
import Consulting from './components/Consulting';
import CloudSolutions from './components/CloudSolutions';
import ProductDesign from './components/ProductDesign';
import WhatWeDo from './components/WhatWeDo';
import SiteMaintenance from './components/SiteMaintenance';
import OurProducts from './components/OurProducts';

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 2000,
//   speedAsDuration: true,
// });

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeaderBanner />
                  <WhatWeDo />
                  {/* <MissionAndVision /> */}
                  <Projects />
                  <Services />
                  <Team />
                </>
              }
            />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route 
              path="/careers"  
              element={<Careers />} 
            />
            <Route 
              path="/contact"  
              element={<Contact />} 
            />
            <Route path="/our-products" element={<OurProducts />} />
            <Route path="/software-development" element={<SoftwareDevelopment />} />
            <Route path="/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/product-design" element={<ProductDesign />} />
            <Route path="/site-maintenance" element={<SiteMaintenance />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
