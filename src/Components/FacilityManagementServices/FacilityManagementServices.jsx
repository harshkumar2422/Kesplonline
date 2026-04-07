import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import fcmbgimg from "./fcimg.jpg";
import "./FacilityManagementServices.css";
import skilledtechimg from "./skilledtechimg.webp";
import helpdeskimg from "./helpdesksupport.jpg";
import infrastructure from "./infrastructuremonitruing.webp";
import incidentmanagementimg from "./incidentmanagement.jpg";
const FacilityManagementServices = () => {
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
        className="facility-hero"
        style={{ backgroundImage: `url(${fcmbgimg})` }}
      >
        <div className="facility-hero-overlay"></div>

        <div className="facility-hero-content reveal">
          <h1 className="facility-hero-title ">Facility Management Services</h1>

          <p className="facility-hero-subtitle">
            Professional IT operational support delivered by skilled technical
            personnel, ensuring uninterrupted infrastructure performance.
          </p>
        </div>
      </div>
      <section className="facility-values-section">
        <div className="facility-container">
          {/* Heading */}
          <h6 className="facility-heading reveal">Why FMS Matters</h6>
          <p className="facility-subtext reveal">
            KESPL's IT Facility Management Services allow organisations to focus
            entirely on their core functions while KES manages the technical
            environment with professional, round-the-clock operational
            expertise.
          </p>
          <p className="facility-subtext reveal">
            Proactive monitoring and responsive support minimise downtime,
            reduce operational risk, and maintain business continuity across
            critical technology environments.
          </p>

          {/* Cards */}
          <div className="facility-cards">
            {/* Card 1 */}
            <div className="facility-card reveal">
              <div className="facility-icon">
                <img
                  src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1775563198/skilledtechimg_d2lr0p.webp"
                  alt=""
                />
              </div>
              <h3>Skilled Technical Personnel</h3>
              <p>Deployment of certified professionals at client sites</p>
            </div>

            {/* Card 2 */}
            <div className="facility-card reveal">
              <div className="facility-icon">
                <img
                  src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1775562845/infrastructuremonitruing_mdgcot.webp"
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
            <div className="facility-card reveal">
              <div className="facility-icon">
                <img src={helpdeskimg} alt="" />
              </div>
              <h3>Helpdesk & User Support</h3>
              <p>Responsive helpdesk services for end-user issues</p>
            </div>
            {/* card 4 */}
            <div className="facility-card reveal">
              <div className="facility-icon">
                <img src={incidentmanagementimg} alt="" />
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
