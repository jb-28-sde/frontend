import React from 'react';
import './About.css';

export default function About() {
  return (
    
    <div className="about-container">
      
      <div className="about-inner">
        <div className="about-left">
          <h1 className='about-left-title'>About us</h1>
          <h1>About UniverseMart</h1>
          <p>Your trusted destination for everything you need is here</p>

          <div className="about-content">
            <p>
              At <strong>UniverseMart</strong>, we redefine shopping by offering a seamless and delightful experience.
              Whether it's electronics, fashion, home essentials, or more — we’ve got it all.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
              <li>We accept all major credit/debit cards</li>
              <li>Hassle-free & secure transactions</li>
              <li>Complete transparency with our customers</li>
              <li>24×7 dedicated customer support</li>
              <li>Easy exchange & return policies</li>
              <li>Trusted platform for both buying and selling</li>
            </ul>

            <p className="closing-line">
              Come, experience the future of shopping with <span>UniverseMart</span> — where quality meets trust.
            </p>
          </div>
        </div>

        <div className="about-right">
          <img
            src="https://plus.unsplash.com/premium_photo-1683133261283-78fe47339160?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="shopping-mall"
            className="about-image"
          />
        </div>
      </div>
    </div>
  );
}

