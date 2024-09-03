import React, { useState } from 'react';
import data from '../data/data.json';
import './Portfolio.css';
import PortfolioQuote from './PortfolioQuote'; 

const Portfolio = () => {
  const [isQuotePopupOpen, setQuotePopupOpen] = useState(false);
  const [quote, setQuote] = useState('');
  const [currentLink, setCurrentLink] = useState('');

  const handleQuoteSubmit = () => {
    // Handle quote submission logic here
    console.log('Quote submitted:', quote);
    setQuotePopupOpen(false);
  };

  const openQuotePopup = (link) => {
    setCurrentLink(link);
    setQuote(`Here's the selected template: ${link}\n\n Get a Quote for this:`);
    setQuotePopupOpen(true);
  };

  return (
    <section id="portfolio">
      <h2>Portfolio Development</h2>
      <div className="portfolio-container">
        {data.portfolios.map((portfolio) => (
          <div key={portfolio.title} className="portfolio-card">
            <div className="iframe-container">
              <iframe 
                src={portfolio.link} 
                title={portfolio.title} 
                loading="lazy" 
                className="portfolio-iframe"
              ></iframe>
              <div className="button-container">
                <button 
                  className="quote-btn" 
                  onClick={() => openQuotePopup(portfolio.link)}
                > 
                  Get Quote for the website 
                </button>
                <a 
                  href={portfolio.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="live-preview-btn"
                >
                  Live Preview
                </a>
              </div>
            </div>
            <h3>{portfolio.title}</h3>
            <p>{portfolio.description}</p>
          </div>
        ))}
      </div>
      {isQuotePopupOpen && (
        <PortfolioQuote
          quote={quote}
          setQuote={setQuote}
          onSubmit={handleQuoteSubmit}
          onClose={() => setQuotePopupOpen(false)}
        />
      )}
    </section>
  );
};

export default Portfolio;
