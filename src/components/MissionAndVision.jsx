import {useEffect, React} from 'react';
import './MissionAndVision.css';

const MissionAndVision = () => {

  useEffect(() => {
    if (window.ScrollReveal) {
      window.ScrollReveal().reveal('.mission-image', {
        duration: 1500,        
        distance: '500px',      
        origin: 'left',       
        reset: false,
      });
      window.ScrollReveal().reveal('.mission-text', {
        duration: 1500,        
        distance: '500px',      
        origin: 'right',       
        reset: false,
      });
      window.ScrollReveal().reveal('.vision-image', {
        duration: 1500,        
        distance: '500px',      
        origin: 'right',       
        reset: false,
      });
      window.ScrollReveal().reveal('.vision-text', {
        duration: 1500,        
        distance: '500px',      
        origin: 'left',       
        reset: false,
      });
    }
  }, []);


  return (
    <section id="about" className="about-section">
      <div className="mission-vision">
        <div className="mission">
          <div className="mission-image">
            <img src="Images/mission.jpg" alt="Mission" />
          </div>
          <div className="mission-text">
            <h2>Mission</h2>
            <p>
              At FalkenRidge, our mission is to deliver exceptional software
              development, cloud services, and digital transformation solutions
              tailored to meet the unique needs of our clients. We strive to
              create lasting value through innovation, customer-centric
              approaches, and a commitment to excellence, enabling our clients
              to thrive in the digital age.
            </p>
          </div>
        </div>

        <div className="about-us vision">
          <div className="vision-image">
            <img src="Images/vision.jpg" alt="Vision" />
          </div>
          <div className="vision-text">
            <h2>Vision</h2>
            <p>
              To empower global businesses with cutting-edge technology
              solutions that foster sustainable growth, drive innovation, and
              ensure success in the rapidly evolving digital transformation era.
              We aim to be the trusted partner that helps organizations navigate
              the complexities of modern technology, enabling them to achieve
              their full potential and lead in their respective industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
