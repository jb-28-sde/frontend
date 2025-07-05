import React, { useState } from "react";
import "./Contact.css";

const faqs = [
  { q: "How do I track my order?", a: "Go to My Orders, select the order and click on “Track”." },
  { q: "What is the return policy?", a: "You can return any unused product within 7 days of delivery." },
  { q: "How do I change my password?", a: "Go to Account Settings → Security → Change Password." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [active, setActive] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-wrapper">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-grid">
        <form className="contact-form-glass" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Your Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Your Email"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            value={form.subject}
            placeholder="Subject"
            onChange={handleChange}
          />
          <textarea
            name="message"
            value={form.message}
            rows="5"
            placeholder="Your Message"
            required
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </form>

        <div className="faq-section">
          <h2>FAQ's</h2>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-card ${active === idx ? "active" : ""}`}
              onClick={() => setActive(active === idx ? null : idx)}
            >
              <div className="faq-question">{faq.q}</div>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
