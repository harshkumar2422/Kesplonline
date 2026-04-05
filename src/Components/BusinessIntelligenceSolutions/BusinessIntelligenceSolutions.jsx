import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./BusinessIntelligenceSolutions.css";
import businesssolutionbgimg from "./business-solution.jpg";
import custombgimg from "./custombgimg.jpg";
import bianalsics from "./bianalysic.jpg";
import datawarehousingbgimg from "./business-solution.jpg";
const BusinessIntelligenceSolutions = () => {
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
        className="itstaffing-hero"
        style={{ backgroundImage: `url(${businesssolutionbgimg})` }}
      >
        <div className="itstaffing-hero-overlay"></div>

        <div className="itstaffing-hero-content reveal">
          <h1 className="itstaffing-hero-title">
            Business Intelligence Solutions
          </h1>

          <p className="itstaffing-hero-subtitle">
            Our comprehensive BI solution stack builds from a solid data
            foundation through advanced analytics to deliver clear, actionable
            visualizations.
          </p>
        </div>
      </div>
      <section className="itstaffing-values-section">
        <div className="itstaffing-container">
          {/* Heading */}
          <h6 className="itstaffing-heading reveal">
            Advanced Analytics Services
          </h6>
          <p className="itstaffing-subtext reveal">
            Advanced Analytics Services transform data into actionable insights
            using AI and data-driven techniques, helping businesses make
            informed decisions, optimize performance, and drive growth.
          </p>

          {/* Cards */}
          <div className="itstaffing-cards">
            {/* Card 1 */}
            <div className="itstaffing-card reveal">
              <div className="itstaffing-icon">
                <img src={custombgimg} alt="" />
              </div>
              <h3>Custom Visualization</h3>
              <p>
                Creating intuitive dashboards and reports for clear insights
              </p>
            </div>

            {/* Card 2 */}
            <div className="itstaffing-card reveal">
              <div className="itstaffing-icon">
                <img src={bianalsics} alt="" />
              </div>
              <h3>BI Analytics</h3>
              <p>Transforming raw data into actionable intelligence</p>
            </div>

            {/* Card 3 */}
            <div className="itstaffing-card reveal">
              <div className="itstaffing-icon">
                <img src={datawarehousingbgimg} alt="" />
              </div>
              <h3>Data Warehousing</h3>
              <p>Centralizing and organizing your business data foundation</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BusinessIntelligenceSolutions;
