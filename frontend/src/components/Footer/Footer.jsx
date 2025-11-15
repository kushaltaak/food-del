import React from "react";
import "./Footer.css";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Tomato Logo" className="footer-logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laudantium ea sunt placeat. Animi cum neque mollitia non, repellat
            corporis minima. Corrupti voluptatem adipisci explicabo facere
            impedit minima non a.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        © 2024 Tomato.com — All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
