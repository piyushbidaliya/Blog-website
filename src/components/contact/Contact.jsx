import React, { useRef } from 'react';
import './contact.css';
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();

  const resetForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "serviceid",
        "templateid",
        form.current,
        "userid"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
    <div className='app__contact-form-heading' id='contact'>
      <h2 className='Gradient__text'>Contact Me</h2>
    </div>
    <div className="contact-us">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="user_email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
          ></textarea>
        </div>
        <input type="submit" value="Send"/>
      </form>
    </div>
    </div>
  );
};

export default Contact;
