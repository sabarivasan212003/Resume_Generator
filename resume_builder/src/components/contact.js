import React, { useState } from 'react';
import axios from 'axios';
import "../style/contact.css"
import Navbar from './Navbar';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [feedback, setMessage] = useState('');
  const [formError, setFormError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update state based on input field name
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'emailid':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'company':
        setCompany(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    if (!name.trim() || !email.trim() || !feedback.trim()) {
      setFormError('Please fill in all required fields.');
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormError('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const data = { name, email, phone, company, feedback };

      axios.post("http://localhost:8080/api/v1/users/addUserFeedback", data)
        .then((response) => {
          console.log(response);
          // Reset the form after successful submission
          setName('');
          setEmail('');
          setPhone('');
          setCompany('');
          setMessage('');
          setFormError('');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="img_wrrap">
        </div>
        <div className="about">
          <div className="aboutTop"></div>
          <h4 className='con_h4'>--Get in touch with us---</h4>
        </div>
        <div className='img_ccont'>
          <div className="content n">
            <div className="container">
              <div className="row align-items-stretch no-gutters contact-wrap">
                <div className="col-md-6">
                  <div className="form h-100">
                    <h3>Send us a message</h3>
                    <form className="mb-5" method="post" id="contactForm" name="contactForm">
                      <div className="row">
                        <div className="col-md-6 form-group mb-5">
                          <label htmlFor="name" className="col-form-label">Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Your name"
                            value={name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 form-group mb-5">
                          <label htmlFor="emailid" className="col-form-label">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            name="emailid"
                            id="email"
                            placeholder="Your email"
                            value={email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 form-group mb-5">
                          <label htmlFor="phone" className="col-form-label">Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            id="phone"
                            placeholder="Phone #"
                            value={phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6 form-group mb-5">
                          <label htmlFor="company" className="col-form-label">Company</label>
                          <input
                            type="text"
                            className="form-control"
                            name="company"
                            id="company"
                            placeholder="Company name"
                            value={company}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 form-group mb-5">
                          <label htmlFor="message" className="col-form-label">Message *</label>
                          <textarea
                            className="form-control"
                            name="message"
                            id="message"
                            cols="30"
                            rows="4"
                            placeholder="Write your message"
                            value={feedback}
                            onChange={handleInputChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <input
                            type="submit"
                            value="Send Message"
                            className="btn btn-primary rounded-0 py-2 px-4"
                            onClick={submitHandler}
                          />
                          <span className="submitting"></span>
                        </div>
                      </div>
                      {formError && <div className="row">
                        <div className="col-md-12 form-group text-danger">
                          {formError}
                        </div>
                      </div>}
                    </form>

                    <div id="form-message-warning mt-4"></div>
                    <div id="form-message-success">
                      Your message was sent, thank you!
                    </div>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-info h-100">
                    <div className='videos'>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
