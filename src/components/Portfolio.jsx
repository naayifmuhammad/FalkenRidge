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
    <section id="portfolio" className="portfolio">
      <div className="portfolio-intro-container">
        <div className="heading-advantages">
          <div className="portfolio-text-wrapper">
            <h1 className="portfolio-heading heading-gradient">
              Why Should You Have a Portfolio Website?
            </h1>
          </div>
          <div className="advantage-list">
            <div className="image-container">
              <img src="/portfolio/portfolio.jpg" alt="" />
            </div>
            <ul>
              <li>
                <i class="fa fa-briefcase"></i> Showcase Your Work
              </li>
              <li>
                <i class="fa fa-thumbs-up"></i> Build Credibility
              </li>
              <li>
                <i class="fa fa-globe"></i> Expand Your Reach
              </li>
              <li>
                <i class="fa fa-bullhorn"></i> Present your work and story the
                way you want, without the constraints of social media platforms.
              </li>
              <li>
                <i class="fa fa-trophy"></i>Show the range of your abilities by
                including different types of projects
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="select-a-portfolio-container">
        <div className="select-portfolio-header">
          <h1>Select a template</h1>
        </div>
      </div>

      <div className="portfolio-templates-container">
        {data.portfolios.map((portfolio) => (
          <div className="portfolio-template-card">
            <div className="card-interactive-area">
              <div className="template-preview-image">
                <p className="view-text">"{portfolio.description}"</p>
                <img
                  src={portfolio.image}
                  alt=""
                  onError={(e) => {
                    e.target.src = "/portfolio/portfolio-grid-default.png";
                  }}
                />
              </div>
            </div>
            <div className="template-title">
              <p>{portfolio.title}</p>
            </div>
            <div className="card-actions">
              <button
                className="get-quote button-primary"
                onClick={() => openQuotePopup(portfolio.link)}
              >
                Get a Quote
              </button>
              {/* <a
                href={portfolio.link}
                target="_blank"
                rel="noopener noreferrer"
                className="live-preview-btn"
              >
                Live Preview
              </a> */}
            </div>
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
