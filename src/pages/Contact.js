import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle form submission
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (!name) {
      setNameError('Name is required.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!message) {
      setMessageError('Message is required.');
      isValid = false;
    } else {
      setMessageError('');
    }

    return isValid;
  };



    return (
        <div className='background-image'>
      <section className="label" id="Contact">
        <h2 id="button">
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <div>{nameError}</div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div>{emailError}</div>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <div>{messageError}</div>
      </div>
      <button type="submit">Submit</button>
    </form>
        </h2>
        <br></br>
      </section>
      </div>
    );
  }


export default Contact;