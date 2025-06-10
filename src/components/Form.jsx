import React, { useState } from 'react';
import axios from "axios"
import './Form.css';

export default function Form({Download_Brochure}) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', consent: true });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
 
  };

const validate = () => {
  const err = {};

  const name = String(form.name || '').trim();
  const phone = String(form.phone || '').trim();
  const email = String(form.email || '').trim();
  const message = String(form.message || '').trim();

  if (!name) err.name = "Name is required";
  if (!/^[6-9]\d{9}$/.test(phone)) err.phone = "Valid Indian mobile number required";
  if (!/\S+@\S+\.\S+/.test(email)) err.email = "Valid email required";
  if (!message) err.message = "Message is required";
  if (!form.consent) err.consent = "Consent is required";

  return err;
};



const handleSubmit = async (e) => {
  e.preventDefault();

  const err = validate();  // Validate and get the error object
  const isValid = Object.keys(err).length === 0;

  if (!isValid) {
    setErrors(err);  // Show validation errors
    return;          // Stop submission
  }

  try {
    // await axios.post("http://localhost:5000", form);
    Download_Brochure && Download_Brochure();
    alert("Form submitted successfully!");
    
    // Reset form and errors only on successful submission
    setForm({ name: '', phone: '', email: '', message: '', consent: true });
    setErrors({});
  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }
};


  // document.getElementsByTagName("input").focas(setErrors(''))
  return (
    <div className="form-container">
      <h3>Book A Site Visit</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          {/* <label>Name</label> */}
          <input name="name" value={form.name} onChange={handleChange} placeholder='Name'/>
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-row">
          {/* <label>Contact No.</label> */}
          <input name="phone" value={form.phone} onChange={handleChange} placeholder='Contact No.'/>
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-row">
          {/* <label>Email</label> */}
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder='Email'/>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-row">
          {/* <label>Message</label> */}
          <input name="message" value={form.message} onChange={handleChange} placeholder='Message'/>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <div className="form-row checkbox-row">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
          />
          <label>
            I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers.
          </label>
          {errors.consent && <span className="error">{errors.consent}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
