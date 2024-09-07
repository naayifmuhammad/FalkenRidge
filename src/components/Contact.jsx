import React from 'react';
import { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css';

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
    <section id="contact" className="contact">
      <div className="left item">
        <div className="contact-intro">
          <h1 className=''>
            Let's Get In Touch{" "}
            <span className='heading-gradient'>
              <i className="fa fa-connectdevelop"></i>
            </span>
          </h1>
          <img className="contact-image" src="/Images/contact.jpg" alt="" />
        </div>
      </div>
      <div className="right item">
        <h1>We'd Love to Hear From You!</h1>
        <form name="sentMessage" validate onSubmit={handleSubmit}>
          <div className="row-1">
            <div className="field-item">
              <input
                type="text"
                id="name"
                name="name"
                className="custom-input text-white "
                placeholder="Name"
                required
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
            <div className="field-item">
              <input
                type="email"
                id="email"
                name="email"
                className="custom-input text-white "
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <p className="help-block text-danger"></p>
            </div>
          <div className="">
            <textarea
              name="message"
              id="message"
              className="custom-input text-white textarea "
              rows="4"
              placeholder="Message"
              required
              onChange={handleChange}
              ></textarea>
            <p className="help-block text-danger"></p>
          </div>
          <div id="success"></div>
          <button type="submit" className="contact-btn button-primary">
            Send Message
          </button>
        </div>
        </form>
      </div>
    </section>
  );
};

export default Footer;
