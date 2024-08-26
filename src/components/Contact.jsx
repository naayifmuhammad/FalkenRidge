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
          <h1>Let's Get In Touch <span><i className='fa fa-connectdevelop'></i></span></h1>
          <p>
            Or just reach out to{" "}
            <span className="mail-highlight">info@falkenridge.com</span>
          </p>
          <img className='contact-image' src="/Images/contact.jpg" alt="" />
        </div>
      </div>
      <div className="right item">
        <h1>We'd Love to Hear From You!</h1>
        <form name="sentMessage" validate onSubmit={handleSubmit}>
          <div className="">
            <div className="">
              <div className="">
              <label htmlFor="name" className="form-label text-white">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control bg-dark text-white border-0 rounded-pill"
                  placeholder="Name"
                  required
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="">
              <label htmlFor="email" className="form-label text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control bg-dark text-white border-0 rounded-pill"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div className="">
          <label htmlFor="message" className="form-label">What do you want to tell us?</label>
            <textarea
              name="message"
              id="message"
              className="form-control bg-dark text-white border-0 rounded-pill"
              rows="4"
              placeholder="Message"
              required
              onChange={handleChange}
            ></textarea>
            <p className="help-block text-danger"></p>
          </div>
          <div id="success"></div>
          <button
            type="submit"
            className="form-control btn-primary"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Footer;
