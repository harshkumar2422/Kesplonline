import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./GovernmentSectorEngagement.css";
import govermentsecimg from "./govermentsecimg.jpg";
import longsupportimg from "./longsupportimg.jpg";
import procurementimg from "./Procurementimg.jpg";
import largescaleimg from "./largescaleimg.jpg";
const GovernmentSectorEngagement = () => {
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
        className="goverment-sector-hero"
        style={{ backgroundImage: `url(${govermentsecimg})` }}
      >
        <div className="goverment-sector-hero-overlay"></div>

        <div className="goverment-sector-hero-content reveal">
          <h1 className="goverment-sector-hero-title">
            Government Sector Engagement
          </h1>

          <p className="goverment-sector-hero-subtitle">
            KESPL delivers secure, high-availability IT solutions that enhance
            performance, efficiency, and long-term sustainability of government
            enterprise systems.
          </p>
        </div>
      </div>
      <section className="goverment-sector-values-section">
        <div className="goverment-sector-container">
          {/* Heading */}
          <h6 className="goverment-sector-heading reveal">
            Government Outreach
          </h6>
          <p className="goverment-sector-subtext reveal">
            KESPL has developed strong engagement within the Government of India
            ecosystem. The company works closely with central ministries, state
            government departments, and public sector institutions to support
            technology initiatives aimed at improving governance and service
            delivery.
          </p>
          <p className="goverment-sector-subtext reveal">
            KES brings a clear understanding of government procurement
            frameworks and the unique operational requirements of public sector
            technology deployments — making it a dependable, long-term partner
            for mission-critical digital transformation programmes.
          </p>

          {/* Cards */}
          <div className="goverment-sector-cards">
            {/* Card 1 */}
            <div className="goverment-sector-card reveal">
              <div className="goverment-sector-icon-card">
                <img src={procurementimg} alt="" />
              </div>
              <h3>Procurement Framework Expertise</h3>
              <p>
                Deep understanding of government tendering and procurement
                processes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="goverment-sector-card reveal">
              <div className="goverment-sector-icon-card">
                <img src={largescaleimg} alt="" />
              </div>
              <h3>Large-Scale Project Capability</h3>
              <p>
                Proven ability to support complex, high-volume government
                deployments.
              </p>
            </div>

            {/* Card 3 */}
            <div className="goverment-sector-card reveal">
              <div className="goverment-sector-icon-card">
                <img src={longsupportimg} alt="" />
              </div>
              <h3>Long-Term Support Model</h3>
              <p>
                Sustained operational support for post-deployment infrastructure
                management.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GovernmentSectorEngagement;
