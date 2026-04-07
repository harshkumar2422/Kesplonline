import React, { useEffect } from "react";
import "./MainContainer.css";
import { useNavigate } from "react-router-dom";
import images1 from "./system-integration.png";
import images2 from "./technical-support.png";
import images3 from "./building.png";
import images4 from "./microchip.png";
import images5 from "./digitalization.png";
import images6 from "./customer-support.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const valuesData = [
  {
    title: "Innovation",
    description:
      "Continuously exploring new technologies to deliver future-ready solutions",
  },
  {
    title: "Integrity",
    description:
      "Transparency, ethical conduct, and accountability in every engagement",
  },
  {
    title: "Customer Focus",
    description:
      "Solutions aligned with client objectives and long-term outcomes",
  },
  {
    title: "Reliability",
    description: "Dependable services that support mission-critical operations",
  },
  {
    title: "Execution Excellence",
    description:
      "Projects delivered efficiently, on time, and to the highest standards",
  },
];
const benefitsData = [
  {
    icon: <img src={images1} alt="icnon" />,
    title: "System Integration",
    description:
      "Designing and deploying complex IT systems that integrate hardware, software, and networking technologies into cohesive, efficient ecosystems.",
    route: "/services/system-integration",
  },
  {
    icon: <img src={images2} alt="icnon" />,
    title: "IT Services",
    description:
      "KESPL provides a comprehensive portfolio of IT services designed to support the long-term performance and evolution of enterprise technology environments. The company's service delivery model focuses on ensuring high availability, security, and operational efficiency",
    route: "/services/it-services",
  },
  {
    icon: <img src={images3} alt="icnon" />,
    title: "Facility Management",
    description:
      "Professional IT operational support delivered by skilled technical personnel, ensuring uninterrupted infrastructure performance.",
    route: "/services/facility-management-services",
  },
  {
    icon: <img src={images4} alt="icnon" />,
    title: "IT Staffing and Augmentation",
    description:
      "IT Staffing and Augmentation helps businesses quickly skilled IT professionals to their teams, encuring faster project delivery, flexibility, and access to the right expertise without long-term hiring",
    route: "/services/it-staffing-Augmentation-services",
  },
  {
    icon: <img src={images5} alt="icnon" />,
    title: "Digital Marketing",
    description: `Curpent Digital Marketing Services help businesses grow their online presence through targeted strategies like SEO, social media, and advertising, driving traffic, engagement, and conversions.`,
    route: "/services/digital-marketing-services",
  },
  {
    icon: <img src={images6} alt="icnon" />,
    title: "IOT",
    description:
      "Internet of Things (IoT) Solutions connect devices and systems to enable real-time data monitoring, automation, and smarter decision-making across operations.",
    route: "/services/iot-services",
  },
];
const MainContainer = () => {
  const navigate = useNavigate();
  const gotocontact = () => {
    console.log("CLicked");

    navigate(`/contact`);
  };
  // ✅ HANDLE NAVIGATION FOR EXPLORE BUTTON
  const handleExplore = (route) => {
    navigate(route);
  };

  useEffect(() => {
    const reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active"); // 👈 IMPORTANT
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
      {/* NAVBAR */}
      <Header />

      {/* HERO */}
      <div className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title reveal">
            The future of building <br />
            <span>happens together</span>
          </h1>

          <p className="hero-subtitle reveal">
            Tools and trends may change, but collaboration remains constant.
            Today, developers, Artificial intelligence systems, and code
            converge seamlessly on a single platform, shaping how modern
            software is created and delivered.
          </p>

          <div className="hero-buttons ">
            {/* <button className="cssbuttons-io ">
              <span>Request Consulation</span>
            </button> */}
            <button className="cssbuttons-io " onClick={gotocontact}>
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* KEEP ALL YOUR OTHER SECTIONS SAME */}
      {/* NO CHANGE BELOW */}

      <section className="benefits-container">
        <div className="benefits-header reveal">
          <h1>
            The Key Services <br /> for Your Business Growth
          </h1>
          <p>
            Discover how AI automation enhances efficiency, reduces costs, and
            drives business growth with smarter, faster processes.
          </p>
        </div>

        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="icon-wrapper">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              <button
                className="benefit-button"
                style={{ color: "#fff" }}
                onClick={() => handleExplore(benefit.route)}
              >
                <span class="button__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="button__icon-svg"
                    width="10"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    class="button__icon-svg button__icon-svg--copy"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>
      <div className="features">
        <h1 className="reveal">Why Choose US</h1>
        <p className="features-para">
          KESPL offers a distinctive combination of technical expertise,
          implementation capability, and deep market understanding that makes it
          a trusted partner for organisations undertaking complex technology
          initiatives.
        </p>
        <div className="features-cards">
          {/* Card 1 */}
          <div className="features-card reveal">
            <div className="features-icon features-fancy-box-icon">
              <img
                src="https://cdn.prod.website-files.com/694368fec078b4de6ca4f1b6/694e068e326ac91e0dde6000_fancy-icon2.svg"
                alt=""
              />
            </div>
            <h3>Government Ecosystem Engagement</h3>
            <p>
              Established relationships with central and state government
              institutions, with a strong understanding of public sector
              procurement frameworks
            </p>
          </div>
          {/* Card 2 */}
          <div className="features-card reveal">
            <div className="features-icon features-fancy-box-icon">
              <img
                src="https://cdn.prod.website-files.com/694368fec078b4de6ca4f1b6/694e068ed35d9d22bad59e12_fancy-icon6.svg"
                alt=""
              />
            </div>
            <h3>Structured Execution Methodology</h3>
            <p>
              A disciplined, stage-gated project delivery framework that
              minimises risk and ensures consistent outcomes
            </p>
          </div>

          {/* Card 3 */}
          <div className="features-card reveal">
            <div className="features-icon features-fancy-box-icon">
              <img
                src="https://cdn.prod.website-files.com/694368fec078b4de6ca4f1b6/694e068d5f668d6aea13b82a_fancy-icon4.svg"
                alt=""
              />
            </div>
            <h3>Large-Scale Deployment Support</h3>
            <p>
              Demonstrated capability to support and sustain technology
              deployments at scale across geographies
            </p>
          </div>
        </div>
        <div className="features-cards">
          {/* Card 4 */}
          <div className="features-card reveal">
            <div className="features-icon features-fancy-box-icon">
              <img
                src="https://cdn.prod.website-files.com/694368fec078b4de6ca4f1b6/694e068ddff4925a95fc0136_fancy-icon3.svg"
                alt=""
              />
            </div>
            <h3>Proven Integration Capabilities</h3>
            <p>
              Deep expertise in integrating complex, multi-vendor technology
              environments for enterprise-scale deployments
            </p>
          </div>

          {/* Card 5 */}
          <div className="features-card reveal">
            <div className="features-icon features-fancy-box-icon">
              <img
                src="https://cdn.prod.website-files.com/694368fec078b4de6ca4f1b6/694e068d08dbf4bfac5e7e65_fancy-icon5.svg"
                alt=""
              />
            </div>
            <h3>Skilled Technical Teams</h3>
            <p>
              Certified professionals with hands-on experience across
              infrastructure, networking, systems, and emerging technologies
            </p>
          </div>
        </div>
      </div>

      <div className="containerr">
        <div className="sub-container reveal">
          <img
            src="https://wallpapers.com/images/hd/4k-tech-105e3a4x7aw7coqd.jpg"
            alt="vison & mission"
          />
        </div>
        <div className="sub-container">
          <div className="text-container reveal">
            <div className="vision-container">
              <h2>OUR VISION</h2>
              <p>
                To become a trusted technology partner driving the adoption of
                next-generation digital and Artificial Intelligence solutions
                across government and enterprise ecosystems in India, empowering
                organizations with secure, scalable, and innovative technologies
                to enhance efficiency, enable smarter decision-making, and
                accelerate digital transformation.
              </p>
            </div>
            <div className="mission-container">
              <h2>OUR MISSION</h2>

              <p>
                To deliver reliable, scalable, and innovative technology
                solutions that enable organizations to transform their
                operations, enhance efficiency, and maximize the value of their
                digital infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="core-container">
        <div className="core-heading">
          <h2>OUR CORE VALUES</h2>
        </div>
        <div className="values-container">
          <div className="values-grid">
            {valuesData.map((item, index) => (
              <div
                key={index}
                className="value-card reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainContainer;
