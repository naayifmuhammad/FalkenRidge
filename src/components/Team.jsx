import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section id="team" className="team-section">
      <h2 className="section-header-meet">The Team Behind FalkenRidge</h2>
      <div className="team-members">
        <div className="member">
          <div className="badge">
            <img className='member-image' src="company_assets/team/nikhil.png" alt="Nikhil" />
          </div>
            <span className='member-name'>Nikhil Prakash</span>
            <span className='member-name'>Senior Developer</span>
        </div>
        <div className="member">
          <div className="badge">
            <img className='member-image' src="company_assets/team/nikhil.png" alt="Nikhil" />
          </div>
            <span className='member-name'>Nikhil Prakash</span>
            <span className='member-name'>Actor</span>
        </div>
        <div className="member">
          <div className="badge">
            <img className='member-image' src="company_assets/team/nikhil.png" alt="Nikhil" />
          </div>
            <span className='member-name'>Nikhil Prakash</span>
            <span className='member-name'>Director</span>
        </div>
        <div className="member">
          <div className="badge">
            <img className='member-image' src="company_assets/team/nikhil.png" alt="Nikhil" />
          </div>
            <span className='member-name'>Nikhil Prakash</span>
            <span className='member-name'>Composer</span>
        </div>
      </div>
    </section>
  );
};

export default Team;
