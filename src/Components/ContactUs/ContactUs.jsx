import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ContactUs.css";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import contactImg from "./contact-bgimage.jpg";

const ContactUs = () => {
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
      <Header />
      <div
        className="contact-hero"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content reveal">
          <h1 className="contact-hero-title">
            Let’s Build Something Together.
            <br />
          </h1>

          <p className="contact-hero-subtitle">
            Reach out to us to explore how our solutions can support your goals.
            We’re committed to understanding your needs and delivering the right
            results.
          </p>
        </div>
      </div>

      <section className="contact">
        <div className="contact-container">
          {/* LEFT SIDE */}
          <div className="contact-left reveal">
            <h1>Ask whatever you have in your mind</h1>

            <p>
              Whether you have questions or are ready to discuss your business,
              we’re here to help. Reach out today.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right">
            <div className="contact-info">
              <div className="info-item reveal">
                <FaEnvelope />
                <span>contact@kesplonline.com</span>
              </div>

              <div className="info-item reveal">
                <FaMapMarkerAlt />
                <span>
                  1222, 12th Floor, Ansal Towers, Nehru Place, New Delhi 110019
                </span>
              </div>
              <div className="info-item reveal">
                <MdWork className="contact-mail-icon"/>

                <span>
                  For career opportunities, please reach out to us at :
                  <b> careers@kesplonline.com</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact map-conatiner">
        <div className="contact-container reveal">
          <span style={{ width: "100%" }}>
            <iframe
              title="Google Map Showing Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.3500192474874!2d77.24812919839479!3d28.5487345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cf98afffff%3A0x742a8968a6570bfe!2sAnsal%20Tower%2038%20Nehru%20Place!5e0!3m2!1sen!2sin!4v1775200683264!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowfullscreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
