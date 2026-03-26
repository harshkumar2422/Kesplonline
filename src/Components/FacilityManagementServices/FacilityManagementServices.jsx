import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import fcmbgimg from "./fcimg.jpg";
import "./FacilityManagementServices.css";
const FacilityManagementServices = () => {
  return (
    <>
      <Header />
      <div
        className="facility-hero"
        style={{ backgroundImage: `url(${fcmbgimg})` }}
      >
        <div className="facility-hero-overlay"></div>

        <div className="facility-hero-content ">
          <h1 className="facility-hero-title">
            IT Facility Management Services
          </h1>

          <p className="facility-hero-subtitle">
            KESPL provides a comprehensive portfolio of IT services designed to
            support the long-term performance and evolution of enterprise
            technology environments. The company's service delivery model
            focuses on ensuring high availability, security, and operational
            efficiency.
          </p>
        </div>
      </div>
      <section className="facility-values-section">
        <div className="facility-container">
          {/* Heading */}
          <h6 className="facility-heading ">Why FMS Matters</h6>
          <p className="facility-subtext">
            KESPL's IT Facility Management Services allow organisations to focus
            entirely on their core functions while KES manages the technical
            environment with professional, round-the-clock operational
            expertise.
          </p>
          <p className="facility-subtext">
            Proactive monitoring and responsive support minimise downtime,
            reduce operational risk, and maintain business continuity across
            critical technology environments.
          </p>

          {/* Cards */}
          <div className="facility-cards">
            {/* Card 1 */}
            <div className="facility-card ">
              <div className="facility-icon">
                <img
                  src="https://framerusercontent.com/images/qCPT61H8KatnJwS4aqpuVjWWdM.svg"
                  alt=""
                />
              </div>
              <h3>Skilled Technical Personnel</h3>
              <p>Deployment of certified professionals at client sites</p>
            </div>

            {/* Card 2 */}
            <div className="facility-card ">
              <div className="facility-icon">
                <img
                  src="https://framerusercontent.com/images/c7ewovWjVsAf198pTS4MtYSO8k.svg"
                  alt=""
                />
              </div>
              <h3>Infrastructure Monitoring</h3>
              <p>Continuous monitoring and proactive maintenance</p>
            </div>
          </div>
          {/* Cards */}
          <div className="facility-cards">
            {/* Card 3 */}
            <div className="facility-card ">
              <div className="facility-icon">
                <img
                  src="https://framerusercontent.com/images/sgcwYsOD6V0LWJJRJQ99llynBI.svg"
                  alt=""
                />
              </div>
              <h3>Helpdesk & User Support</h3>
              <p>Responsive helpdesk services for end-user issues</p>
            </div>
            {/* card 4 */}
            <div className="facility-card ">
              <div className="facility-icon">
                <img
                  src="https://framerusercontent.com/images/sgcwYsOD6V0LWJJRJQ99llynBI.svg"
                  alt=""
                />
              </div>
              <h3>Incident Management</h3>
              <p>Structured incident and problem resolution frameworks</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FacilityManagementServices;
