import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaThreads,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* LEFT SIDE */}
          <div className="footer-left">
            <div className="footer-logo">
              <h2>
                <img
                  src={
                    "https://www.kesplonline.com/images/icons/ic-logo-02.png"
                  }
                  alt=""
                />
              </h2>
            </div>

            <p className="description">
              We have invested heavily in proven methodologies that reduce
              infrastructure and ongoing support costs achieving a higher return
              on IT investment. Customers benefit from more structured and
              streamlined operations, enabling them to boost efficiency, gain
              competitive advantage and reduce running costs
            </p>

            <div className="social-icons reveal">
              <Link to="#">
                <FaLinkedinIn />
              </Link>
              <Link to="#">
                <FaXTwitter />
              </Link>
              <Link to="#">
                <FaInstagram />
              </Link>
              <Link to="#">
                <FaFacebookF />
              </Link>
              <Link to="#">
                <FaThreads />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="footer-right">
            <div className="footer-column">
              <h4>SECTION</h4>
              <ul>
                <li>Base</li>
                <li>About us</li>
                <li>Innovation</li>
                <li>Careers</li>
                <li>Contact us</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>SERVICES</h4>
              <ul>
                <li>SOFTWARE DEVELOPMENT</li>
                <li>QUALITY ASSURANCE & SOFTWARE TESTING</li>
                <li>INTEGRATIONS & MIGRATIONS</li>
                <li>CLIENT SUPPORT</li>
                <li>IT STRATEGY CONSULTING</li>
                <li>CLOUD COMPUTING</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="terms-container">
          <div className="">© 2018 18 Networks. All rights reserved.</div>
          <div>
            <ul>
              <li>Terms & Policy</li>
              <li>Legal & Compliance</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
