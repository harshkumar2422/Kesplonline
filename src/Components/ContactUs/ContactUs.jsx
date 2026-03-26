import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ContactUs.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
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

            <div className="contact-info">
              <div className="info-item reveal">
                <FaEnvelope />
                <span>contact@kesplonline.com</span>
              </div>

              <div className="info-item reveal">
                <FaPhoneAlt />
                <span>(971) 711-3212</span>
              </div>

              <div className="info-item reveal">
                <FaMapMarkerAlt />
                <span>F 1203, Chittaranjan Park, New Delhi – 110019</span>
              </div>
              <div className="info-item reveal">
                <span style={{ width: "100%" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56068.92704921547!2d77.12910882355132!3d28.560514341227872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d6d7ab1211%3A0xad60ddcd63cd0688!2sKLIMAANLAGE%20ENGINEERING%20SERVICES!5e0!3m2!1sen!2sin!4v1774350552523!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right">
            <form className="contact-form reveal">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Jane Smith" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="jane@framer.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="number" placeholder="9XXXX XXXX9" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Hi, I am reaching out for..." rows="5" />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
