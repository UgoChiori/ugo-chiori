
import "./pricing.css";
import React from "react";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  return (
    <div className="pricing">
      {/* <h1 className="pricing_title">Choose the Right Plan for Your Needs</h1> */}
      <div className="pricing_container">
        <div className="card">
          <h3 className="card_title">Basic</h3>
          <span className="bar"></span>
          <p className="price">$600</p>
          <ul className="features">
            <li>3 Pages</li>
            <li>Responsive Design</li>
            <li>Basic SEO Optimization</li>
            {/* <li>1 Revision Round</li>
            <li>Contact Form Integration</li> */}
          </ul>
          <Link to="/contact" className="btn">Get Started</Link>
        </div>
        <div className="card popular">
          <h3 className="card_title">Advanced</h3>
          <span className="bar"></span>
          <p className="price">$1,000</p>
          <ul className="features">
            <li>6 Pages</li>
            <li>Responsive Design</li>
            <li>Advanced SEO Optimization</li>
            {/* <li>2 Revision Rounds</li>
            <li>Contact Form Integration</li>
            <li>Social Media Integration</li> */}
          </ul>
          <Link to="/contact" className="btn">Get Started</Link>
        </div>
        <div className="card">
          <h3 className="card_title">Premium</h3>
          <span className="bar"></span>
          <p className="price">$1,500</p>
          <ul className="features">
            <li>10 Pages</li>
            <li>Responsive Design</li>
            <li>Advanced SEO Optimization</li>
            {/* <li>3 Revision Rounds</li>
            <li>Contact Form Integration</li>
            <li>Social Media Integration</li>
            <li>E-commerce Functionality</li> */}
          </ul>
          <Link to="/contact" className="btn">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;