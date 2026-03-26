import React from "react";
import "./ITServices.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import itservicesbgimg from "./itservicebg.jpg";
const ITServices = () => {
  return (
    <>
      <Header />
      <div
        className="it-services-hero"
        style={{ backgroundImage: `url(${itservicesbgimg})` }}
      >
        <div className="it-services-hero-overlay"></div>

        <div className="it-services-hero-content ">
          <h1 className="it-services-hero-title">IT Services</h1>

          <p className="it-services-hero-subtitle">
            KESPL provides a comprehensive portfolio of IT services designed to
            support the long-term performance and evolution of enterprise
            technology environments. The company's service delivery model
            focuses on ensuring high availability, security, and operational
            efficiency.
          </p>
        </div>
      </div>
      <section className="it-services-values-section">
        <div className="it-services-container">
          {/* Heading */}
          <h6 className="emtech-heading ">Service Deep-Dive</h6>
          <p className="emtech-subtext">
            KESPL provides a comprehensive portfolio of IT services designed to
            support the long-term performance and evolution of enterprise
            technology environments. The company's service delivery model
            focuses on ensuring high availability, security, and operational
            efficiency.
          </p>

          {/* Cards */}
          <div className="it-services-cards">
            {/* Card 1 */}
            <div className="it-services-card ">
              <div className="it-services-icon">
                <img
                  src="https://framerusercontent.com/images/qCPT61H8KatnJwS4aqpuVjWWdM.svg"
                  alt=""
                />
              </div>
              <h3>Infrastructure Management</h3>
              <p>
                Proactive management of IT infrastructure assets to ensure
                continuous performance, availability, and alignment with
                business requirements.
              </p>
            </div>

            {/* Card 2 */}
            <div className="it-services-card ">
              <div className="it-services-icon">
                <img
                  src="https://framerusercontent.com/images/c7ewovWjVsAf198pTS4MtYSO8k.svg"
                  alt=""
                />
              </div>
              <h3>Technology Consulting</h3>
              <p>
                Expert advisory services to help organisations evaluate, plan,
                and implement technology roadmaps that align with operational
                objectives.
              </p>
            </div>

            {/* Card 3 */}
            <div className="it-services-card ">
              <div className="it-services-icon">
                <img
                  src="https://framerusercontent.com/images/sgcwYsOD6V0LWJJRJQ99llynBI.svg"
                  alt=""
                />
              </div>
              <h3>System Implementation & Lifecycle Management</h3>
              <p>
                End-to-end deployment support from initial rollout through
                ongoing lifecycle management, performance monitoring, and
                infrastructure optimisation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ITServices;
