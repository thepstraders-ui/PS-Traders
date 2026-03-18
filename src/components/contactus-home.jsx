import React, { useState } from "react";
import "./contactus-home.css";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="contact">

      <div className="contact-header">
        <h2>Contact Us</h2>
        <p className="subtitle">Get in Touch</p>
      </div>

      <div className="contact-container">

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="row">
            <input
              name="name"
              placeholder="Name *"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="lastname"
              placeholder="Last Name"
              value={form.lastname}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>

        </form>

        <div className="contact-info">
          <p>
            Have a query or need more information? Feel free to contact us via
            the form below. Our team is ready to assist you.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Contact;