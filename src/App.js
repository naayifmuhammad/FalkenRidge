import React from 'react';
import Navbar from './components/Navbar';
import HeaderBanner from './components/HeaderBanner';
import Projects from './components/Projects';
import Team from './components/Team';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderBanner />
      <Projects />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
