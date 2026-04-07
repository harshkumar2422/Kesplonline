import React, { useEffect } from "react";
import "./ItStaffingAugmentation.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import staffbgimg from "./itstaffingbgimgbanner.jpeg";
import itstaffbgimg from "./itstaffimg.webp";
import itrelocationbgimg from "./itrelocation.jpg";
import techservicesbgimg from "./technicalserviceimg.webp";
import skilbgimg from "./skillgap.webp";
import talentbgimg from "./talent.webp";
import seamlessbgimg from "./seamless.jpg";
import Accordion from "react-bootstrap/Accordion";
import itaccordianimg from "./it-accoridanimg.jpg.jpeg";
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
        style={{
          backgroundImage: `url(${"https://res.cloudinary.com/dbibpsvgt/image/upload/v1775563407/itstaffingbgimgbanner_pwliuk.jpg"})`,
        }}
      >
        <div className="itstaffing-hero-overlay"></div>

        <div className="itstaffing-hero-content reveal">
          {/* <h1 className="itstaffing-hero-title">
            IT Staffing and Augmentation
          </h1> */}

          {/* <p className="itstaffing-hero-subtitle">
            IT Staffing and Augmentation helps businesses quickly add skilled IT
            professionals to their teams, ensuring faster project delivery,
            flexibility, and access to the right expertise without long-term
            hiring.
          </p> */}
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
          <div className="accordian-conatiner ">
            <div className="accordian-subcontainer reveal-left">
              <img
                src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1775563457/it-accoridanimg.jpg_knvfob.jpg"
                alt=""
              />
            </div>
            <div className="accordian-subcontainer">
              <Accordion defaultActiveKey="0" className="it-accordian">
                <Accordion.Item eventKey="0" className="reveal">
                  <Accordion.Header>
                    What Is IT Staff Augmentation?
                  </Accordion.Header>
                  <Accordion.Body>
                    It’s a strategic approach where you temporarily enhance your
                    existing team with specialized tech professionals who
                    seamlessly integrate into your operations. Unlike
                    traditional hiring, staff augmentation lets you “plug in”
                    the exact skills you need, when you need them.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="reveal">
                  <Accordion.Header>
                    Why Is IT Staff Augmentation Important?
                  </Accordion.Header>
                  <Accordion.Body>
                    In today’s tech landscape, where project requirements can
                    change faster than software updates, IT staff augmentation
                    has become a crucial business strategy. It’s the difference
                    between struggling with limited resources and smoothly
                    scaling your capabilities on demand.
                    <br /> <br />
                    Staff augmentation supports businesses in their pursuit of
                    staying competitive by allowing for immediate access to
                    specialized skills, handling workload spikes, and keeping
                    projects moving with no overhead to recruit and hire as is
                    traditional.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="reveal">
                  <Accordion.Header>
                    How Does IT Staff Augmentation Differ From Outsourcing?
                  </Accordion.Header>
                  <Accordion.Body>
                    Even though both involve external talent, staff augmentation
                    and outsourcing represent about as different concepts as
                    local and cloud storage. In staff augmentation, you will
                    remain in direct control over your augmented team members in
                    that they work under your supervision, follow your current
                    processes, and integrate with your existing team.
                    <br /> <br />
                    It’s like adding new players to your sports team rather than
                    hiring another team to play on your behalf. In contrast,
                    outsourcing involves giving the entire project or pieces of
                    functions to the outsider who operates the work and also the
                    workforce that performs the function.
                    <br /> <br />
                    With Staff Augmentation, there is an advantage in providing
                    more control, better integration, and closer alignment to
                    the culture.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          {/* Cards */}
          <div className="itstaffing-cards">
            {/* Card 1 */}
            <div className="itstaffing-card reveal">
              <div className="itstaffing-icon">
                <img
                  src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1775563501/itstaffimg_hwzbca.webp"
                  alt=""
                />
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
                <img
                  src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1775563555/technicalserviceimg_ox2hek.webp"
                  alt=""
                />
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
                <img
                  src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1775563596/skillgap_ypba6m.webp"
                  alt=""
                />
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
                <img
                  src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1775563632/talent_nelu0h.webp"
                  alt=""
                />
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
