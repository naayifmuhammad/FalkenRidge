import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section id="team" className="team-section">
      <h2 className="section-header-meet">
        The Team Behind <span className="highlight">FalkenRidge</span>
      </h2>
      <div className="team-members">
        <div className="member">
          <div className="badge">
            <img
              className="member-image"
              src="company_assets/team/nikhil.png"
              alt="Nikhil"
            />
          </div>
          <span className="member-name">Nikhil Prakash</span>
          <span className="member-designation">Co-Founder & CEO</span>
        </div>
        <div className="member">
          <div className="badge">
            <img
              className="member-image"
              src="company_assets/team/naayif.png"
              alt="Naayif"
            />
          </div>
          <span className="member-name">Muhammad Naayif</span>
          <span className="member-designation">Co-Founder & CTO</span>
        </div>
      </div>
    </section>
  );
};

export default Team;
