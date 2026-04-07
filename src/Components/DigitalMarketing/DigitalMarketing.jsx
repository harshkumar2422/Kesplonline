import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./DigitalMarketing.css";
import digitalmarketingbgimg from "./digital-marketing-bg.jpg";
import reputationmanagementimg from "./Reputation-Management-img.jpg";
import seobgimg from "./seoimg.webp";
import ppcbgimg from "./ppcimg.jpg";
import soscialmarekting from "./socialmarketing.jpg";
const DigitalMarketing = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(
      ".reveal,.reveal-left, .reveal-right",
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
        className="digitalmarketing-hero"
        style={{ backgroundImage: `url(${digitalmarketingbgimg})` }}
      >
        <div className="digitalmarketing-hero-overlay"></div>

        <div className="digitalmarketing-hero-content reveal">
          <h1 className="digitalmarketing-hero-title">
            Digital Marketing Services
          </h1>

          <p className="digitalmarketing-hero-subtitle">
            Digital Marketing Services help businesses grow their online
            presence through targeted strategies like SEO, social media, and
            advertising, driving traffic, engagement, and conversions.
          </p>
        </div>
      </div>
      <section className="digitalmarketing-values-section">
        <div className="digitalmarketing-container">
          {/* Heading */}
          <h6 className="digitalmarketing-heading reveal">
            Digital Growth Solutions
          </h6>
          <p className="digitalmarketing-subtext reveal">
            Digital Growth Solutions empower businesses to scale their online
            presence through strategic, data-driven approaches. By combining
            technology, analytics, and innovative marketing techniques, they
            enhance brand visibility, improve user engagement, and optimize
            overall performance. This ensures sustainable growth, better
            customer reach, and long-term business success in an increasingly
            competitive digital landscape.
          </p>

          {/* Cards */}
          <div className="digitalmarketing-cards">
            {/* Card 1 */}
            <div className="digitalmarketing-card reveal">
              <div className="digitalmarketing-icon">
                <img src={reputationmanagementimg} alt="" />
              </div>
              <h3>Reputation Management</h3>
              <p>
                Monitor and enhance brand presence across 40+ review platforms
                with multilingual response management.
              </p>
            </div>

            {/* Card 2 */}
            <div className="digitalmarketing-card reveal">
              <div className="digitalmarketing-icon">
                <img
                  src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1775563713/seoimg_htjzqo.webp"
                  alt=""
                />
              </div>
              <h3>SEO Services</h3>
              <p>
                Global SEO optimization for 25+ markets with comprehensive
                technical audits.
              </p>
            </div>
          </div>
          {/* Cards */}
          <div className="digitalmarketing-cards">
            {/* Card 3 */}
            <div className="digitalmarketing-card reveal">
              <div className="digitalmarketing-icon">
                <img src={ppcbgimg} alt="" />
              </div>
              <h3>PPC Campaign Management</h3>
              <p>
                Global PPC campaigns with targeted audience strategies across
                major search engines.
              </p>
            </div>
            {/* card 4 */}
            <div className="digitalmarketing-card reveal">
              <div className="digitalmarketing-icon">
                <img src={soscialmarekting} alt="" />
              </div>
              <h3>Social Media Marketing</h3>
              <p>
                Strategic B2B content across LinkedIn, Twitter, and regional
                networks with data-driven campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DigitalMarketing;
