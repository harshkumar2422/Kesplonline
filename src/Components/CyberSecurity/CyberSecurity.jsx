import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./CyberSecurity.css";
import applicationimg from "./appliactionimg.jpg";
import cyberriskimg from "./cyberriskimg.jpg";
import dataprivacyimg from "./dataprivacyimg.jpg";
import endpoint from "./endpoint-security.jpg";
import networksecurity from "./networksecurityimg.jpg";
import securityrisk from "./securityriskimg.jpg";
import cybersecuritybgimg from "./cybersecuritybgimg.jpg";
import managedsecurity from "./ManagedSecurity img.jpg";
import cloudsecurity from "./cloudsecurityimg.jpg";
import identfyimg from "./identityimg.jpg";
import securityframework from "./securityframeworkimg.jpg";
import securityawarnessimg from "./securityawarnessimg.jpg";
import incidenytimg from "./incidenytimg.webp";
const CyberSecurity = () => {
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
        className="cybersecurity-hero"
        style={{ backgroundImage: `url(${cybersecuritybgimg})` }}
      >
        <div className="cybersecurity-hero-overlay"></div>

        <div className="cybersecurity-hero-content reveal">
          <h1 className="cybersecurity-hero-title">
            Cyber Resilience for a Borderless Digital World
          </h1>

          <p className="cybersecurity-hero-subtitle">
            As enterprises accelerate toward cloud, AI, and interconnected
            ecosystems, cyber threats are evolving at unprecedented speed. KESPL
            delivers intelligent, adaptive, and end-to-end cybersecurity
            solutions designed to protect, detect, and respond—ensuring your
            business operates with confidence, continuity, and trust.
          </p>
        </div>
      </div>
      <section className="cybersecurity-values-section">
        <div className="cybersecurity-container">
          {/* Heading */}
          <h6 className="cybersecurity-heading reveal">
            The KESPL Cyber Security Advantage
          </h6>
          <p className="cybersecurity-subtext reveal">
            We go beyond traditional security models to build resilient,
            self-defending digital environments.
          </p>
          <p className="cybersecurity-subtext reveal">
            A comprehensive, intelligence-driven security approach that covers
            the entire lifecycle—from consulting and building to ongoing
            operations—while integrating IT, OT, and cloud environments. It
            ensures continuous 24/7 monitoring, rapid incident response, and
            strict adherence to globally aligned compliance standards.
          </p>

          {/* Cards */}
          <div className="cybersecurity-cards">
            {/* Card 1 */}
            <div className="cybersecurity-card reveal">
              <div className="cybersecurity-icon">
                <img src={cyberriskimg} alt="" />
              </div>
              <h3>Cyber Risk & Advisory</h3>
              <p>
                <ul>
                  <li>Enterprise Risk Assessments</li>
                  <li>Vulnerability Assessment & Penetration Testing (VAPT)</li>
                  <li>Threat Modeling & Attack Surface Analysis</li>
                  <li>Regulatory Compliance (ISO 27001, GDPR, etc.)</li>
                </ul>
              </p>
            </div>

            {/* Card 2 */}
            <div className="cybersecurity-card reveal">
              <div className="cybersecurity-icon">
                <img src={securityrisk} alt="" />
              </div>
              <h3>Security Architecture & Strategy</h3>
              <p>
                <ul>
                  <li>Cybersecurity Strategy & Roadmaps</li>
                  <li>Governance, Risk & Compliance (GRC)</li>
                  <li>Policy & Framework Development</li>
                  <li>Virtual CISO (vCISO)</li>
                </ul>
              </p>
            </div>

            {/* Card 3 */}
            <div className="cybersecurity-card reveal">
              <div className="cybersecurity-icon">
                <img src={networksecurity} alt="" />
              </div>
              <h3>Network & Infrastructure Security</h3>
              <p>
                <ul>
                  <li>Next-Gen Firewalls & Network Segmentation</li>
                  <li>Intrusion Detection & Prevention (IDS/IPS)</li>
                  <li>Zero Trust Architecture</li>
                  <li>Secure Remote Access (VPN)</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="cybersecurity-cards">
            {/* Card 1 */}
            <div className="cybersecurity-card reveal">
              <div className="cybersecurity-icon">
                <img src={endpoint} alt="" />
              </div>
              <h3>Endpoint & Workforce Security</h3>
              <p>
                <ul>
                  <li>Endpoint Detection & Response (EDR/XDR)</li>
                  <li>Device Hardening & Patch Management</li>
                  <li>Mobile Device Security</li>
                  <li>Remote Workforce Protection</li>
                </ul>
              </p>
            </div>

            {/* Card 2 */}
            <div className="cybersecurity-card reveal">
              <div className="cybersecurity-icon">
                <img src={applicationimg} alt="" />
              </div>
              <h3>Application & API Security</h3>
              <p>
                <ul>
                  <li>Secure SDLC Implementation</li>
                  <li>SAST / DAST Testing</li>
                  <li>Web Application Firewall (WAF)</li>
                  <li>API Security Frameworks</li>
                </ul>
              </p>
            </div>

            {/* Card 3 */}
            <div className="cybersecurity-card reveal">
              <div className="cybersecurity-icon">
                <img src={dataprivacyimg} alt="" />
              </div>
              <h3>Data Security & Privacy</h3>
              <p>
                <ul>
                  <li>Encryption (At Rest & In Transit)</li>
                  <li>Data Loss Prevention (DLP)</li>
                  <li>Backup & Disaster Recovery</li>
                  <li>Data Governance & Privacy Controls</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="cybersecurity-cards">
            {/* Card 1 */}
            <div className="cybersecurity-card reveal">
              <div className="cybersecurity-icon">
                <img src={identfyimg} alt="" />
              </div>
              <h3>Identity & Access Management (IAM)</h3>
              <p>
                <ul>
                  <li>Multi-Factor Authentication (MFA)</li>
                  <li>Single Sign-On (SSO)</li>
                  <li>Privileged Access Management (PAM)</li>
                  <li>Identity Governance</li>
                </ul>
              </p>
            </div>

            {/* Card 2 */}
            <div className="cybersecurity-card reveal">
              <div className="cybersecurity-icon">
                <img src={cloudsecurity} alt="" />
              </div>
              <h3>Cloud Security</h3>
              <p>
                <ul>
                  <li>Cloud Security Posture Management (CSPM)</li>
                  <li>Identity & Access Controls</li>
                  <li>Multi-Cloud & Hybrid Security</li>
                  <li>Compliance & Configuration Management</li>
                </ul>
              </p>
            </div>

            {/* Card 3 */}
            <div className="cybersecurity-card reveal">
              <div className="cybersecurity-icon">
                <img src={managedsecurity} alt="" />
              </div>
              <h3>Managed Security Services (SOC)</h3>
              <p>
                <ul>
                  <li>24/7 Security Operations Center</li>
                  <li>SIEM Integration & Monitoring</li>
                  <li>Threat Intelligence & Analytics</li>
                  <li>Managed Detection & Response (MDR)</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="cybersecurity-cards">
            {/* Card 1 */}
            <div className="cybersecurity-card reveal">
              <div className="cybersecurity-icon">
                <img src={incidenytimg} alt="" />
              </div>
              <h3>Incident Response & Resilience</h3>
              <p>
                <ul>
                  <li>Incident Response Planning</li>
                  <li>Digital Forensics</li>
                  <li>Breach Containment & Recovery</li>
                  <li>Business Continuity Planning</li>
                </ul>
              </p>
            </div>

            {/* Card 2 */}
            <div className="cybersecurity-card reveal">
              <div className="cybersecurity-icon">
                <img src={securityawarnessimg} alt="" />
              </div>
              <h3>Cyber Awareness & Training</h3>
              <p>
                <ul>
                  <li>Security Awareness Programs</li>
                  <li>Phishing Simulations</li>
                  <li>Executive & Board Training</li>
                  <li>Certification Programs</li>
                </ul>
              </p>
            </div>

            {/* Card 3 */}
            <div className="cybersecurity-card reveal">
              <div className="cybersecurity-icon">
                <img src={securityframework} alt="" />
              </div>
              <h3>Our Cyber Security Framework</h3>
              <p>
                <ul>
                  <li>Identify: Assets, risks, vulnerabilities</li>
                  <li>Protect: Preventive controls & architecture</li>
                  <li>Detect: Real-time monitoring & intelligence</li>
                  <li>Respond: Rapid incident management</li>
                  <li>Recover: Business continuity & resilience</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CyberSecurity;
