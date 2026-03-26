import React from "react";
import "./SystemIntegration.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import softwarebgimg from "./softwaredev-img.jpg";
const SystemIntegration = () => {
  return (
    <>
      <Header />
      <div
        className="softwarepg-hero"
        style={{ backgroundImage: `url(${softwarebgimg})` }}
      >
        <div className="softwarepg-hero-overlay"></div>

        <div className="softwarepg-hero-content ">
          <h1 className="softwarepg-hero-title">System Integration</h1>

          <p className="softwarepg-hero-subtitle">
            Designing and deploying complex IT systems that integrate hardware,
            software, and networking technologies into cohesive, efficient
            ecosystems.
          </p>
        </div>
      </div>
      <section className="softwarepg-values-section">
        <div className="softwarepg-container">
          {/* Heading */}
          <h6 className="emtech-heading ">System Integration Expertise</h6>
          <p className="emtech-subtext">
            KESPL specialises in integrating diverse technology components into
            cohesive and efficient IT ecosystems. The company supports complex
            technology deployments that require the seamless coordination of
            multiple systems — from enterprise networks to data management
            platforms.
          </p>
          <p className="emtech-subtext">
            Through structured implementation methodologies, KES ensures that
            all components operate together efficiently, providing reliable and
            scalable technology environments that meet the rigorous demands of
            government and enterprise clients.
          </p>

          {/* Cards */}
          <div className="softwarepg-cards">
            {/* Card 1 */}
            <div className="softwarepg-card ">
              <div className="softwarepg-icon">
                <img
                  src="https://framerusercontent.com/images/qCPT61H8KatnJwS4aqpuVjWWdM.svg"
                  alt=""
                />
              </div>
              <h3>IT Infrastructure Deployment</h3>
              <p>
                From open source stack of LAMP( Linux, Apache, MY-SQL, PHP) to
                Java based web development to Microsoft Technologies viz. .Net
                framework can be used for development.
              </p>
            </div>

            {/* Card 2 */}
            <div className="softwarepg-card ">
              <div className="softwarepg-icon">
                <img
                  src="https://framerusercontent.com/images/c7ewovWjVsAf198pTS4MtYSO8k.svg"
                  alt=""
                />
              </div>
              <h3>Enterprise System Integration</h3>
              <p>
                Our applications work perfectly on both desktop and mobile
                devices.
              </p>
            </div>

            {/* Card 3 */}
            <div className="softwarepg-card ">
              <div className="softwarepg-icon">
                <img
                  src="https://framerusercontent.com/images/sgcwYsOD6V0LWJJRJQ99llynBI.svg"
                  alt=""
                />
              </div>
              <h3>Network Architecture Implementation</h3>
              <p>
                Offering end-to-end software development solutions for desktop &
                web applications, e-commerce, and mobile applications.
              </p>
            </div>
          </div>
          <div className="softwarepg-cards">
            {/* Card 1 */}
            <div className="softwarepg-card ">
              <div className="softwarepg-icon">
                <img
                  src="https://framerusercontent.com/images/qCPT61H8KatnJwS4aqpuVjWWdM.svg"
                  alt=""
                />
              </div>
              <h3>Security Infrastructure Integration</h3>
              <p>
                From open source stack of LAMP( Linux, Apache, MY-SQL, PHP) to
                Java based web development to Microsoft Technologies viz. .Net
                framework can be used for development.
              </p>
            </div>

            {/* Card 2 */}
            <div className="softwarepg-card ">
              <div className="softwarepg-icon">
                <img
                  src="https://framerusercontent.com/images/c7ewovWjVsAf198pTS4MtYSO8k.svg"
                  alt=""
                />
              </div>
              <h3>Data Management Systems</h3>
              <p>
                Our applications work perfectly on both desktop and mobile
                devices.
              </p>
            </div>

            {/* Card 3 */}
            <div className="softwarepg-card ">
              <div className="softwarepg-icon">
                <img
                  src="https://framerusercontent.com/images/sgcwYsOD6V0LWJJRJQ99llynBI.svg"
                  alt=""
                />
              </div>
              <h3>Software Platform Integration</h3>
              <p>
                Offering end-to-end software development solutions for desktop &
                web applications, e-commerce, and mobile applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SystemIntegration;
