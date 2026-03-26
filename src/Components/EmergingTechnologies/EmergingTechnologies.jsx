import React from "react";
import "./EmergingTechnologies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import etechbgimg from "./etechimg.jpg";
const EmergingTechnologies = () => {
  return (
    <>
      <Header />
      <div
        className="emtech-hero"
        style={{ backgroundImage: `url(${etechbgimg})` }}
      >
        <div className="emtech-hero-overlay"></div>

        <div className="emtech-hero-content ">
          <h1 className="emtech-hero-title">
            Emerging Technologies Services
          </h1>

          <p className="emtech-hero-subtitle">
            Exploring and implementing solutions in Artificial Intelligence,
            intelligent automation, and advanced analytics for future-ready
            organisations.
          </p>
        </div>
      </div>
      <section className="emtech-values-section">
        <div className="emtech-container">
          {/* Heading */}
          <h6 className="emtech-heading ">Strategic Growth Area</h6>
          <p className="emtech-subtext">
            KESPL is actively expanding into the domain of Artificial
            Intelligence and advanced digital technologies. The company
            recognises the transformative impact AI will have across governance,
            enterprise operations, and infrastructure management — and is
            positioning itself to be a key enabler of AI adoption across India.
          </p>

          {/* Cards */}
          <div className="emtech-cards">
            {/* Card 1 */}
            <div className="emtech-card ">
              <div className="emtech-icon">
                <img
                  src="https://framerusercontent.com/images/qCPT61H8KatnJwS4aqpuVjWWdM.svg"
                  alt=""
                />
              </div>
              <h3>AI-Driven Analytics</h3>
              <p>Harnessing data for real-time operational insights</p>
            </div>

            {/* Card 2 */}
            <div className="emtech-card ">
              <div className="emtech-icon">
                <img
                  src="https://framerusercontent.com/images/c7ewovWjVsAf198pTS4MtYSO8k.svg"
                  alt=""
                />
              </div>
              <h3>Data-Driven Decision Support</h3>
              <p>Enabling evidence-based decisions across organisations</p>
            </div>
          </div>
          {/* Cards */}
          <div className="emtech-cards">
            {/* Card 3 */}
            <div className="emtech-card ">
              <div className="emtech-icon">
                <img
                  src="https://framerusercontent.com/images/sgcwYsOD6V0LWJJRJQ99llynBI.svg"
                  alt=""
                />
              </div>
              <h3>Intelligent Automation</h3>
              <p>Automating complex workflows to improve efficiency</p>
            </div>
            {/* card 4 */}
            <div className="emtech-card ">
              <div className="emtech-icon">
                <img
                  src="https://framerusercontent.com/images/sgcwYsOD6V0LWJJRJQ99llynBI.svg"
                  alt=""
                />
              </div>
              <h3>AI-Powered Cybersecurity</h3>
              <p>Advanced threat detection and response systems</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EmergingTechnologies;
