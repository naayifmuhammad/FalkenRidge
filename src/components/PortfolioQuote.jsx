import React, { useState } from 'react';
import './PortfolioQuote.css'; 
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const PortfolioQuote = ({ quote, setQuote, onSubmit, onClose }) => {
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
    <div className="quote-popup">
      <div className="quote-popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h1>Request a Quote</h1>
        <form name="sentMessage" validate onSubmit={handleSubmit}>
          <div className="">
            <div className="">
              <div className="">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
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
                  className="form-control"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div className="">
            <textarea
              name="additional-details" //add the new field info here that you asked for
              id="additional-details"
              placeholder="Tell us more..."
              className="additional-details bg-dark text-white border-0 rounded-pill"
              rows="4"
              onChange={handleChange}
            ></textarea>
            <p className="help-block text-danger"></p>
          </div>
          <div className="">
            <textarea
              name="message"
              id="message"
              value={quote} 
              hidden
              placeholder="Enter your quote details here..."
              className="quote-textarea bg-dark text-white border-0 rounded-pill"
              rows="4"
              required
              onChange={handleChange}
            ></textarea>
            <p className="help-block text-danger"></p>
          </div>
          <div id="success"></div>
          <button
            type="submit"
            className="popup-btn"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default PortfolioQuote;
