import React from 'react';
import data from '../data/data.json';
import './Portfolio.css';

const Portfolio = () => {
  const portfolios = data.portfolios;

  return (
    <section id="portfolio">
      <h2>Portfolio Development</h2>
      <div className="portfolio-container">
        {portfolios.map((portfolio) => (
          <div key={portfolio.title} className="portfolio-card">
            <div className="iframe-container">
              <iframe 
                src={portfolio.link} 
                title={portfolio.title} 
                loading="lazy" 
                className="portfolio-iframe"
              ></iframe>
            </div>
            <h3>{portfolio.title}</h3>
            <p>{portfolio.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
