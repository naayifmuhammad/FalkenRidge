import React, { useState } from 'react';
import data from '../data/data.json';
import './Portfolio.css';
import PortfolioQuote from './PortfolioQuote'; 

//icons
import { PiCertificate } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaCrown } from "react-icons/fa";


const Portfolio = () => {
  const [isQuotePopupOpen, setQuotePopupOpen] = useState(false);
  const [quote, setQuote] = useState("");
  const [currentLink, setCurrentLink] = useState("");

  const handleQuoteSubmit = () => {
    // Handle quote submission logic here
    console.log("Quote submitted:", quote);
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

      <section class="process-tree-container">
        <h2>Our Process</h2>
        <div className="process-tree">
          <div className="line-container">
            <div className="line"></div>
          </div>
          <div className="processes">
            <div class="process-step left">
              <div className="step-content">
                <div class="step-title">1. Initial Contact</div>
                <p>
                  Get in touch after selecting the type of portfolio you
                  require, or contact us at info@falkenridge.com.
                </p>
              </div>
            </div>
            <div class="process-step right">
              <div className="step-content">
                <div class="step-title">2. Guidance & Requirements</div>
                <p>
                  We'll guide you through the whole process and inform you of
                  what we need to start working.
                </p>
              </div>
            </div>
            <div class="process-step left">
              <div className="step-content">
                <div class="step-title">3. Information & CV Submission</div>
                <p>
                  Provide us with your information and, if available, a
                  CV/Resume.
                </p>
              </div>
            </div>
            <div class="process-step right">
              <div className="step-content">
                <div class="step-title">4. Design Work</div>
                <p>Sit back as we work on your portfolio design.</p>
              </div>
            </div>
            <div class="process-step left">
              <div className="step-content">
                <div class="step-title">5. Approval & Hosting</div>
                <p>
                  We get approval from you for the design, then we host it on
                  your behalf.
                </p>
              </div>
            </div>
            <div class="process-step right">
              <div className="step-content">
                <div class="step-title">6. And it's done</div>
                <p>It's that simple!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="service-details-icons-container">
        <div className="item">
          <PiCertificate />
          <h3>Guaranteed Results</h3>
          <span>Your vision, brought to life with measurable success.</span>
        </div>

        <div className="item">
          <RiCustomerService2Line />
          <h3>Great Customer Support</h3>
          <span>
            We're here for you every step of the way, whenever you need us.
          </span>
        </div>

        <div className="item">
          <FaCrown />
          <h3>Full Ownership</h3>
          <span>
            You maintain 100% ownership and control of your portfolio.
          </span>
        </div>
      </div>

      <div className="select-a-portfolio-container">
        <div className="select-portfolio-header">
          <h1>Select a template</h1>
        </div>
        <span>
          The portfolio templates shown here are for illustrative purposes only.
          Each portfolio we create is fully customized and personalized to meet
          the unique needs and preferences of our clients.
        </span>
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
