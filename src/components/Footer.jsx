import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand">
          <h2>UniverseMart</h2>
          <p>Your one stop shop for everything.</p>
          <div className="social">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Resources</h3>
          <ul>
            <li><Link to="#">Shipping & Returns</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms of Service</Link></li>
            <li><Link to="#">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer-col newsletter">
          <h3>Join Our Newsletter</h3>
          <p>Get updates on new products and upcoming sales.</p>
          <form onSubmit={e => { e.preventDefault(); e.target.reset(); alert("Subscribed!"); }}>
            <input type="email" placeholder="Email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} UniverseMart. All rights reserved.</span>
      </div>
    </footer>
  );
}
