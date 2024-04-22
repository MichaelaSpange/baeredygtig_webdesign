import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    // Nulstiller formulardataen efter afsendelse
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form id='kontakt_form' onSubmit={handleSubmit}>
      <div>
        <label className='kontakt_form_label' htmlFor="name">Navn:</label>
        <input className='kontakt_form_input'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className='kontakt_form_label' htmlFor="email">Email:</label>
        <input className='kontakt_form_input' 
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className='kontakt_form_label' htmlFor="message">Besked:</label>
        <textarea style={{ height: "100px"}}  className='kontakt_form_input'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button style={{ width: "30%", fontSize: "30px", alignSelf: "center"}} type="submit">Send</button>
    </form>
  );
};

export default ContactForm;