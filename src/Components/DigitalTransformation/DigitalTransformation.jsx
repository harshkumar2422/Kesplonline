import React from "react";
import "./DigitalTransformation.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import gmbgimg from "./gmimg.jpg";
const DigitalTransformation = () => {
  return (
    <>
      <Header />
      <div
        className="emtech-hero"
        style={{ backgroundImage: `url(${gmbgimg})` }}
      >
        <div className="emtech-hero-overlay"></div>

        <div className="emtech-hero-content ">
          <h1 className="emtech-hero-title">Emerging Technologies Services</h1>

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
          <h6 className="emtech-heading ">Our Partnership Philosophy</h6>
          <p className="emtech-subtext">
            KESPL believes that strong technology partnerships are essential to
            delivering innovative and scalable solutions. The company acts as
            both a technology implementation partner and a market access
            partner, helping cutting-edge solutions reach government and
            enterprise customers across India.
          </p>
          <p className="emtech-subtext">
            By combining partner innovation with KESPL's deep implementation
            expertise and client relationships, we deliver comprehensive
            outcomes at scale.
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
              <h3>AI Solutions</h3>
              <p>
                Collaborating with AI innovators to bring intelligent platforms
                to enterprise and government clients
              </p>
            </div>

            {/* Card 2 */}
            <div className="emtech-card ">
              <div className="emtech-icon">
                <img
                  src="https://framerusercontent.com/images/c7ewovWjVsAf198pTS4MtYSO8k.svg"
                  alt=""
                />
              </div>
              <h3>Data & Analytics</h3>
              <p>
                Partnering with analytics providers to enable data-driven
                decision-making at scale
              </p>
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
              <h3>Cybersecurity</h3>
              <p>
                Working with security specialists to protect critical
                infrastructure and enterprise environments
              </p>
            </div>
            {/* card 4 */}
            <div className="emtech-card ">
              <div className="emtech-icon">
                <img
                  src="https://framerusercontent.com/images/sgcwYsOD6V0LWJJRJQ99llynBI.svg"
                  alt=""
                />
              </div>
              <h3>Enterprise Software</h3>
              <p>
                Integrating leading enterprise platforms tailored to client
                operational r equirements
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DigitalTransformation;
