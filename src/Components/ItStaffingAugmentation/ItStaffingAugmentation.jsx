import React, { useEffect } from "react";
import "./ItStaffingAugmentation.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import staffbgimg from "./staffbgimg.jpg";
import itstaffbgimg from "./itstaffimg.webp";
import itrelocationbgimg from "./itrelocation.jpg";
import techservicesbgimg from "./technicalserviceimg.webp";
import skilbgimg from "./skillgap.webp";
import talentbgimg from "./talent.webp";
import seamlessbgimg from "./seamless.jpg";
const ItStaffingAugmentation = () => {
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
        className="itstaffing-hero"
        style={{ backgroundImage: `url(${staffbgimg})` }}
      >
        <div className="itstaffing-hero-overlay"></div>

        <div className="itstaffing-hero-content reveal">
          <h1 className="itstaffing-hero-title">
            IT Staffing and Augmentation
          </h1>

          <p className="itstaffing-hero-subtitle">
            IT Staffing and Augmentation helps businesses quickly add skilled IT
            professionals to their teams, ensuring faster project delivery,
            flexibility, and access to the right expertise without long-term
            hiring.
          </p>
        </div>
      </div>
      <section className="itstaffing-values-section">
        <div className="itstaffing-container">
          {/* Heading */}
          <h6 className="itstaffing-heading reveal">
            Scalable Tech Workforce Solutions
          </h6>
          <p className="itstaffing-subtext reveal">
            Our resource augmentation service helps organizations scale their IT
            capabilities efficiently by providing skilled professionals across
            development, testing, and maintenance roles. We ensure smooth
            integration and continuous support throughout the engagement
            lifecycle.
          </p>

          {/* Cards */}
          <div className="itstaffing-cards">
            {/* Card 1 */}
            <div className="itstaffing-card reveal">
              <div className="itstaffing-icon">
                <img src={itstaffbgimg} alt="" />
              </div>
              <h3>IT Staffing</h3>
              <p>
                Skilled professionals for project-based needs, providing
                expertise exactly when you need it
              </p>
            </div>

            {/* Card 2 */}
            <div className="itstaffing-card reveal">
              <div className="itstaffing-icon">
                <img src={itrelocationbgimg} alt="" />
              </div>
              <h3>IT Relocation</h3>
              <p>
                Seamless transition of IT resources ensuring continuous business
                operations
              </p>
            </div>

            {/* Card 3 */}
            <div className="itstaffing-card reveal">
              <div className="itstaffing-icon">
                <img src={techservicesbgimg} alt="" />
              </div>
              <h3>Technical Services</h3>
              <p>
                Specialized support for complex IT challenges, delivered by
                expert technicians
              </p>
            </div>
          </div>
          <div className="itstaffing-cards">
            {/* Card 1 */}
            <div className="itstaffing-card reveal">
              <div className="itstaffing-icon">
                <img src={skilbgimg} alt="" />
              </div>
              <h3>Skill Gap Analysis</h3>
              <p>
                Evaluate technical requirements and identify missing
                competencies in IT teams
              </p>
            </div>

            {/* Card 2 */}
            <div className="itstaffing-card reveal">
              <div className="itstaffing-icon">
                <img src={talentbgimg} alt="" />
              </div>
              <h3>Talent Sourcing</h3>
              <p>
                Match skilled IT professionals from our global talent pool to
                project needs
              </p>
            </div>

            {/* Card 3 */}
            <div className="itstaffing-card reveal">
              <div className="itstaffing-icon">
                <img src={seamlessbgimg} alt="" />
              </div>
              <h3>Seamless Integration</h3>
              <p>
                Onboard pre-vetted developers and IT specialists into existing
                teams
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ItStaffingAugmentation;
