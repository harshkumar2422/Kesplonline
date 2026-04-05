import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerlog from "./companylogoimg2.png";
const Footer = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active"); // 👈 IMPORTANT
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* LEFT SIDE */}
          <div className="footer-left">
            <div className="footer-logo">
              <h2>
                <Link to="/">
                  <img src={footerlog} alt="kes" />
                </Link>
              </h2>
            </div>

            <p className="description reveal">
              We have invested heavily in proven methodologies that reduce
              infrastructure and ongoing support costs achieving a higher return
              on IT investment. Customers benefit from more structured and
              streamlined operations, enabling them to boost efficiency, gain
              competitive advantage and reduce running costs
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="footer-right">
            <div className="footer-column">
              <h4>SECTION</h4>
              <ul>
                <li className="reveal">
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li className="reveal">
                  {" "}
                  <Link to="/about">About us</Link>
                </li>
                <li className="reveal">
                  {" "}
                  <Link to="/contact">Contact us</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>SERVICES</h4>
              <ul>
                <li className="reveal">
                  <Link to="/services/system-integration">
                    System Integration
                  </Link>
                </li>
                <li className="reveal">
                  <Link to="/services/it-services">IT Services</Link>
                </li>
                <li className="reveal">
                  <Link to="/services/facility-management-services">
                    Facility Management Services
                  </Link>
                </li>
                <li className="reveal">
                  <Link to="/services/it-staffing-Augmentation-services">
                    It Staffing Augmentation
                  </Link>
                </li>
                <li className="reveal">
                  <Link to="/services/digital-marketing-services">
                    Digital Marketing
                  </Link>
                </li>
                <li className="reveal">
                  <Link to="/services/iot-services">IOT</Link>
                </li>
                <li className="reveal">
                  <Link to="/services/business-intelligence-solutions-services">
                    Business Intelligence Solutions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="terms-container">
          <div>© All rights reserved.</div>
          <div className="terms-bullet">
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
