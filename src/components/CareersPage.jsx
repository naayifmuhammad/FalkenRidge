import React from 'react';
import './CareersPage.css';

const CareersPage = () => {
  return (
    <>
    <section className="career-intro">
      <div className="career-intro-left">
        <h2>Join Our Innovative Team</h2>
        <p>At FalkenRidge, we are passionate about pushing boundaries and delivering cutting-edge solutions. Our team is dedicated to creating impactful technology and fostering an environment where innovation thrives. We’re looking for talented individuals who are eager to contribute, grow, and make a difference. Explore our open positions and be part of our journey to shape the future of tech.</p>
        <a href="#careers-page" className="cta-button">Explore Careers</a>
      </div>
      <div className="career-intro-right">
        <img src="/Careers/careers.jpg" alt="Professional Team" />
      </div>
    </section>

    <section id="careers-page" className="careers-page">
      <h1>Careers at FalkenRidge</h1>
      <p>Shape Tomorrow’s Tech with Us. Your Next Big Challenge Awaits</p>

      <div className="job-openings">
        <div className="job-opening">
          <h2>Software Engineer</h2>
          <p><strong>Location:</strong> Remote</p>
          <p><strong>Type:</strong> Full-Time</p>
          <p>We are looking for a skilled software engineer with experience in React and Node.js. You will be responsible for building and maintaining our web applications.</p>
          <button>Apply Now</button>
        </div>

        <div className="job-opening">
          <h2>Product Manager</h2>
          <p><strong>Location:</strong> Bengaluru, India</p>
          <p><strong>Type:</strong> Full-Time</p>
          <p>As a Product Manager, you'll be in charge of overseeing the development and delivery of our products. You should have experience in product lifecycle management.</p>
          <button>Apply Now</button>
        </div>

        <div className="job-opening">
          <h2>UI/UX Designer</h2>
          <p><strong>Location:</strong> Remote</p>
          <p><strong>Type:</strong> Contract</p>
          <p>We are looking for a creative UI/UX designer to create amazing user experiences. You should have an eye for clean and artful design and be able to translate high-level requirements into interaction flows.</p>
          <button>Apply Now</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default CareersPage;
