import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./IOT.css";
import iotbgimg from "./iotbackground.jpeg";
import iotconsulting from "./iotconsultingimg.webp";
import iotsecurity from "./iotsecurityimg.webp";
import cloudimg from "./cloudimg.jpg";
import smartbuilding from "./samrtbuilding.avif";
import sensordeployment from "./sensordevelopment.webp";
import datacollaction from "./datacollection.webp";
const IOT = () => {
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
        className="IOT-hero"
        style={{
          backgroundImage: `url(${"https://res.cloudinary.com/dbibpsvgt/image/upload/v1775563875/iotbackground_iulke9.jpg"})`,
        }}
      >
        <div className="IOT-hero-overlay"></div>

        <div className="IOT-hero-content reveal">
          <h1 className="IOT-hero-title">Internet of Things (IoT) Solutions</h1>

          <p className="IOT-hero-subtitle ">
            Internet of Things (IoT) Solutions connect devices and systems to
            enable real-time data monitoring, automation, and smarter
            decision-making across operations.
          </p>
        </div>
      </div>
      <section className="IOT-values-section">
        <div className="IOT-container">
          {/* Heading */}
          <h6 className="IOT-heading reveal">Smart Connectivity Solutions</h6>
          <p className="IOT-subtext reveal">
            Smart Connectivity Solutions enable seamless communication between
            devices, systems, and networks, ensuring fast, reliable, and secure
            data exchange while improving operational efficiency and real-time
            connectivity.
          </p>

          {/* Cards */}
          <div className="IOT-cards">
            {/* Card 1 */}
            <div className="IOT-card reveal">
              <div className="IOT-icon">
                <img
                  src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1775563925/iotconsultingimg_ahfpex.webp"
                  alt=""
                />
              </div>
              <h3>IoT Consulting</h3>
              <p>
                Expert guidance on IoT strategy, architecture, and technology
                implementation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="IOT-card reveal">
              <div className="IOT-icon">
                <img
                  src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1775563956/iotsecurityimg_klb4cu.webp"
                  alt=""
                />
              </div>
              <h3>IoT Security</h3>
              <p>
                Comprehensive device protection with encryption and threat
                monitoring.
              </p>
            </div>

            {/* Card 3 */}
            <div className="IOT-card reveal">
              <div className="IOT-icon">
                <img src={cloudimg} alt="" />
              </div>
              <h3>Cold Chain Monitoring</h3>
              <p>
                Real-time temperature tracking and alerts for supply chain
                compliance.
              </p>
            </div>
          </div>
          <div className="IOT-cards">
            {/* Card 1 */}
            <div className="IOT-card reveal">
              <div className="IOT-icon">
                <img
                  src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1775564012/samrtbuilding_tjlbcs.avif"
                  alt=""
                />
              </div>
              <h3>Smart Buildings</h3>
              <p>
                Automated systems for energy, occupancy, and maintenance
                optimization.
              </p>
            </div>

            {/* Card 2 */}
            <div className="IOT-card reveal">
              <div className="IOT-icon">
                <img
                  src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1775564043/sensordevelopment_aov9r9.webp"
                  alt=""
                />
              </div>
              <h3>Sensor Deployment</h3>
              <p>
                Sensor Deployment is the setup of sensors to gather real-time
                data for monitoring and smart operations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="IOT-card reveal">
              <div className="IOT-icon">
                <img
                  src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1775564089/datacollection_hqvwqg.webp"
                  alt=""
                />
              </div>
              <h3>Data Collection</h3>
              <p>
                Data Collection is the process of gathering information from
                various sources for analysis and informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default IOT;
