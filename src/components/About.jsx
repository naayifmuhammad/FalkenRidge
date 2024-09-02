import React from 'react';
import './About.css';
import CountUp from 'react-countup';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          FalkenRidge is a leading tech solutions provider, specializing in innovative software development, cloud services, and digital transformation. Our expertise lies in delivering high-quality, cutting-edge technology solutions that help businesses navigate the complexities of the digital world. With a strong commitment to excellence and a customer-centric approach, we ensure that our clients receive tailored solutions that meet their unique needs and drive sustainable growth.
        </p>
        <p>
          Our journey began with a vision to empower businesses with the tools and technologies needed to thrive in the digital age. Over the years, we have expanded our services, continuously evolving to stay ahead of industry trends and provide our clients with the latest innovations. Today, FalkenRidge is known for its ability to deliver exceptional results, helping organizations achieve their full potential and lead in their respective industries.
        </p>
        <p>
          At FalkenRidge, we believe in the power of collaboration and transparent communication. Our team of experts works closely with clients to understand their goals and challenges, ensuring that every project is executed with precision and care. We are committed to building long-lasting partnerships based on trust, integrity, and mutual success.
        </p>
        <p>
          Our comprehensive range of services includes custom software development, cloud solutions, and digital transformation strategies. Whether you are looking to modernize your IT infrastructure, develop a new application, or transform your business processes, FalkenRidge has the expertise and experience to guide you every step of the way.
        </p>
        <p>
          As we look to the future, FalkenRidge remains dedicated to pushing the boundaries of technology and innovation. Our mission is to continue empowering businesses with the solutions they need to succeed in an ever-changing digital landscape. We are excited to embark on this journey with our clients, driving positive change and delivering outstanding results that make a difference.
        </p>
      </div>

      <div className="mission-vision">
        <div className="mission">
          <div className="mission-image">
            <img src="mission-image.jpg" alt="Mission" />
          </div>
          <div className="mission-text">
            <h2>Mission</h2>
            <p>
              At FalkenRidge, our mission is to deliver exceptional software development, cloud services, and digital transformation solutions tailored to meet the unique needs of our clients. We strive to create lasting value through innovation, customer-centric approaches, and a commitment to excellence, enabling our clients to thrive in the digital age.
            </p>
          </div>
        </div>

        <div className="vision">
          <div className="vision-text">
            <h2>Vision</h2>
            <p>
              To empower global businesses with cutting-edge technology solutions that foster sustainable growth, drive innovation, and ensure success in the rapidly evolving digital transformation era. We aim to be the trusted partner that helps organizations navigate the complexities of modern technology, enabling them to achieve their full potential and lead in their respective industries.
            </p>
          </div>
          <div className="vision-image">
            <img src="vision-image.jpg" alt="Vision" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
