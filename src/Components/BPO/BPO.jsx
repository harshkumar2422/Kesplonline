import React, { useEffect } from "react";
import "./BPO.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import bpobgimg from "./bpobgimg.jpg";
import customerspimg from "./cuastomerspimg.jpg";
import backofficeimg from "./backofficeimg.jpg";
import itenableimg from "./itenableimg.jpg";
import whychooseimg from "./whychooseusimg.jpg";
import engmentimg from "./engment-modeimg.jpg";
const BPO = () => {
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
        className="bpo-services-hero"
        style={{ backgroundImage: `url(${bpobgimg})` }}
      >
        <div className="bpo-services-hero-overlay"></div>

        <div className="bpo-services-hero-content reveal">
          <h1 className="bpo-services-hero-title">
            Redefining Business Operations for a Global, Digital-First World
          </h1>

          <p className="bpo-services-hero-subtitle">
            Integrated BPO and IT-enabled services that combine operational
            excellence with technology depth—built to scale, secure, and
            streamline enterprise operations.
          </p>
        </div>
      </div>
      <section className="bpo-services-values-section">
        <div className="bpo-services-container">
          {/* Heading */}
          <h6 className="bpo-services-heading reveal">
            Engineering Operational Excellence at Scale
          </h6>
          <p className="bpo-services-subtext reveal">
            KESPL delivers end-to-end Business Process Outsourcing (BPO) and
            IT-enabled services designed for modern enterprises. By integrating
            operations with technology infrastructure, we enable organizations
            to move beyond traditional outsourcing—towards intelligent,
            scalable, and resilient operating models.
          </p>
          <p className="bpo-services-subtext reveal">
            Our approach is rooted in precision execution, secure environments,
            and seamless integration with existing enterprise systems.
          </p>
          <h6 className="bpo-services-inside-heading reveal">
            Our Capabilities
          </h6>
          {/* Cards */}
          <div className="bpo-services-cards">
            {/* Card 1 */}
            <div className="bpo-services-card reveal">
              <div className="bpo-services-icon-card">
                <img src={customerspimg} alt="" />
              </div>
              <h3>Customer Operations</h3>
              <p>
                <ul>
                  <li>Multi-channel support (Voice, Email, Chat)</li>
                  <li>Technical Helpdesk (L1 / L2 support)</li>
                  <li>Customer experience management</li>
                  <li>Outbound engagement & sales support</li>
                </ul>
              </p>
            </div>

            {/* Card 2 */}
            <div className="bpo-services-card reveal">
              <div className="bpo-services-icon-card">
                <img src={backofficeimg} alt="" />
              </div>
              <h3>Back Office Operations</h3>
              <p>
                <ul>
                  <li>Data processing & management</li>
                  <li>Finance & accounting support (AP/AR, reconciliation)</li>
                  <li>HR operations & payroll processing</li>
                  <li>Document management & compliance workflows</li>
                </ul>
              </p>
            </div>

            {/* Card 3 */}
            <div className="bpo-services-card reveal">
              <div className="bpo-services-icon-card">
                <img src={itenableimg} alt="" />
              </div>
              <h3>IT-Enabled Services (ITES)</h3>
              <p>
                <ul>
                  <li>Remote infrastructure management</li>
                  <li>Network operations & monitoring (NOC)</li>
                  <li>Application support & maintenance</li>
                  <li>Cybersecurity operations support</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="bpo-services-conatiner">
            <div className="bpo-services-subcontainer reveal-right">
              <img src={whychooseimg} alt="" />
            </div>
            <div className="bpo-services-subcontainer">
              <h2>Why KESPL</h2>
              <h6 className="bpo-services-sub-heading reveal">
                Built on Technology Foundations
              </h6>
              <p className="bpo-services-subtext reveal">
                Unlike traditional BPO providers, KESPL originates from a system
                integration and IT infrastructure background—enabling deeper
                control, integration, and performance optimization.
              </p>
              <h6 className="bpo-services-sub-heading reveal">
                Enterprise & Government Experience
              </h6>
              <p className="bpo-services-subtext reveal">
                Proven execution across high-stakes environments requiring
                reliability, security, and compliance.
              </p>
              <div className="bpo-services-choose-flex">
                <div
                  className="bpo-services-sub-flex"
                  style={{ borderRight: "1px solid gray" }}
                >
                  <h6 className="bpo-services-sub-heading reveal">
                    Security & Compliance First
                  </h6>
                  <p className="bpo-services-subtext reveal">
                    <ul>
                      <li>Secure infrastructure environments</li>
                      <li>Data protection protocols</li>
                      <li>Controlled access and monitoring systems</li>
                    </ul>
                  </p>
                </div>
                <div className="bpo-services-sub-flex">
                  <h6 className="bpo-services-sub-heading reveal">
                    Outcome-Driven Delivery
                  </h6>
                  <p className="bpo-services-subtext reveal">
                    We focus not just on process execution, but on:
                    <ul>
                      <li>Efficiency gains</li>
                      <li>Cost optimization</li>
                      <li>Improved service quality</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h6 className="bpo-services-inside-heading reveal">Our Approach</h6>
          {/* Cards */}
          <div className="bpo-services-cards">
            {/* Card 1 */}
            <div className="bpo-services-card reveal">
              <div className="bpo-services-icon-card">
                <img src={customerspimg} alt="" />
              </div>
              <h3>Integrated Delivery Model</h3>
              <p>
                We combine people, processes, and technology into a unified
                operating framework:
                <br /> <br />
                <ul>
                  <li>Embedded teams aligned with your workflows</li>
                  <li>System integration across enterprise platforms</li>
                  <li>Real-time monitoring and reporting</li>
                </ul>
              </p>
            </div>

            {/* Card 2 */}
            <div className="bpo-services-card reveal">
              <div className="bpo-services-icon-card">
                <img src={backofficeimg} alt="" />
              </div>
              <h3>Back Office Operations</h3>
              <p>
                <ul>
                  <li>CRM and workflow integrations</li>
                  <li>Command & control dashboards</li>
                  <li>Secure cloud and on-premise environments</li>
                </ul>
              </p>
            </div>

            {/* Card 3 */}
            <div className="bpo-services-card reveal">
              <div className="bpo-services-icon-card">
                <img src={itenableimg} alt="" />
              </div>
              <h3>Scalable Architecture</h3>
              <p>
                <ul>
                  <li>Rapid team expansion or contraction</li>
                  <li>Multi-location delivery capability</li>
                  <li>24x7 global operations</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="accordian-conatiner accordian-serve-img-container">
            <div className="accordian-subcontainer accordian-serve">
              <h6 className="bpo-services-heading reveal">
                Industries We Serve
              </h6>
              <p className="bpo-services-subtext reveal">
                <ul>
                  <li>Banking & Financial Services</li>
                  <li>Telecom & Technology</li>
                  <li>E-commerce & Retail</li>
                  <li>Government & Public Sector</li>
                  <li>Healthcare & Insurance</li>
                </ul>
              </p>
              <h6
                className="bpo-services-heading reveal"
                style={{ marginTop: "30px" }}
              >
                Engagement Models
              </h6>
              <p className="bpo-engment-serve reveal">Staff Augmentation</p>
              <p className="bpo-services-subtext reveal">
                Extend your existing teams with specialized talent.
              </p>
              <p className="bpo-engment-serve reveal">Managed Services</p>
              <p className="bpo-services-subtext reveal">
                End-to-end ownership of business processes with SLA-driven
                delivery.
              </p>
              <p className="bpo-engment-serve reveal">Dedicated Delivery Centers</p>
              <p className="bpo-services-subtext reveal">
                Fully managed offshore teams aligned exclusively to your
                organization.
              </p>
            </div>
            <div className="accordian-subcontainer reveal-left">
              <img src={engmentimg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BPO;
