import React, { useState, useEffect } from "react";
import "./MainContainer.css";
import images1 from "./system-integration.png";
import images2 from "./technical-support.png";
import images3 from "./building.png";
import images4 from "./microchip.png";
import images5 from "./digitalization.png";
import images6 from "./customer-support.png";
import Footer from "../Footer/Footer";

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
    btn: "",
  },
  {
    icon: <img src={images2} alt="icnon" />,
    title: "IT Services",
    description:
      "Consulting, infrastructure management, and implementation services that ensure optimal system performance and long-term technology evolution.",
  },
  {
    icon: <img src={images3} alt="icnon" />,
    title: "Facility Management Services",
    description:
      "Professional IT operational support delivered by skilled technical personnel, ensuring uninterrupted infrastructure performance.",
  },
  {
    icon: <img src={images4} alt="icnon" />,
    title: "Emerging Technologies",
    description:
      "Exploring and implementing solutions in Artificial Intelligence, intelligent automation, and advanced analytics for future-ready organisations.",
  },
  {
    icon: <img src={images5} alt="icnon" />,
    title: "Digital Transformation",
    description:
      "Helping organisations modernise their technology environments to improve efficiency, agility, and digital readiness.",
  },
  {
    icon: <img src={images6} alt="icnon" />,
    title: "Client Support",
    description:
      "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
  },
];
const MainContainer = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Innovation",
    "Careers",
    "Contact Us",
  ];

  const features = [
    {
      id: "01",
      title: "Proven Expertise",
      desc: "We consistently deliver results with proven expertise.",
    },
    {
      id: "02",
      title: "Flexible Solutions",
      desc: "Our platform provides highly adaptable, flexible solutions.",
    },
    {
      id: "03",
      title: "Fast Processing",
      desc: "Enjoy seamless, secure transactions with fast process.",
    },
    {
      id: "04",
      title: "Free & Simple",
      desc: "Setup is completely free and very simple for everyone.",
    },
  ];
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* LOGO */}
          <div className="logo">
            <img
              src={"https://www.kesplonline.com/images/icons/ic-logo-02.png"}
              alt="logo"
            />
          </div>

          {/* DESKTOP NAV */}
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {menuItems.map((item) => (
              <div
                key={item}
                className={`nav-item ${active === item ? "active" : ""}`}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="right-section">
            {/* <div className="login-btn">Log In ↗</div> */}

            {/* HAMBURGER */}
            <div
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title reveal">
            The future of building <br />
            <span>happens together</span>
          </h1>

          <p className="hero-subtitle reveal">
            Tools and trends evolve, but collaboration endures. With GitHub,
            developers, agents, and code come together on one platform.
          </p>

          <div className="hero-buttons ">
            <button className="cssbuttons-io ">
              <span>Request Consulation</span>
            </button>
            <button className="cssbuttons-io ">
              <span>Contact</span>
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
              <button className="benefit-button" style={{ color: "#fff" }}>
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
        <div className="features-container reveal">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <span className="feature-number">{item.id}</span>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </div>
          ))}
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
