import React from 'react';
import { useState } from "react";
import emailjs from "emailjs-com";
import './Footer.css';

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Footer = () => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yw3t3ch", "template_ff8efgu", e.target, "rufR-2AiPSl9XoSQ4")
      .then(
        (result) => {
          alert("Message sent successfully!");
          clearState();
          window.location.reload(); 
        },
        (error) => {
          alert("Could not send the message at the moment. Please contact us via email or phone.");
          console.log(error.text);
        }
      );
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Moyalali ee form nte ullil kidakkunna details and above functions maathrama njn ippo add cheythit ullu... */}

        <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="">
                  <div className="">
                    <div className="">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className=""
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className=""
                        placeholder="Email or Mobile"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <textarea
                    name="message"
                    id="message"
                    className=""
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="">
                  Send Message
                </button>
              </form>

        <div className="footer-section">
          <h4>About FalkenRidge</h4>
          <p>FalkenRidge is a leading tech solutions provider, specializing in innovative software development, cloud services, and digital transformation.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#projects">Our Projects</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Software Development</a></li>
            <li><a href="#services">Cloud Solutions</a></li>
            <li><a href="#services">Consulting</a></li>
            <li><a href="#services">Product Design</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:info@falkenridge.com">info@falkenridge.com</a></p>
          <p>Phone: +91-XXXX-XXXXXX</p>
          <p>Address: 123 Tech Park, Kerala, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://facebook.com"><i className="fa fa-facebook"></i></a>
          <a href="www.linkedin.com/in/falkenridge"><i className="fa fa-linkedin"></i></a>
          <a href="https://x.com/FalkenRidge"><i className="fa fa-twitter"></i></a>
          <a href="https://github.com/FalkenRidge"><i className="fa fa-github"></i></a>
        </div>
        <div className="footer-legal">
          <p>&copy; 2024 FalkenRidge Pvt. Ltd. All Rights Reserved.</p>
          <p><a href="/terms-and-conditions">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
