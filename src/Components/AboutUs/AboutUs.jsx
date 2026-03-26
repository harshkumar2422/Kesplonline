import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const timelineData = [
  {
    title: "Requirement Assessment",
    desc: `We analyze the client’s workflows and technical needs to clearly understand objectives, ensuring all requirements are identified for building effective and scalable solutions.`,
  },
  {
    title: "Solution Design",
    desc: `We design a tailored architecture aligned with project goals, focusing on the right technologies, clear workflows, and scalable, secure, high-performance solutions.`,
  },
  {
    title: "Integration & Deployment",
    desc: `We integrate all technology components into a unified system, ensuring smooth deployment, compatibility, and efficient performance in a stable, production-ready environment.`,
  },
  {
    title: "Testing & Optimisation",
    desc: `We rigorously test the system to ensure high performance, reliability, and security, while resolving issues and optimizing it for seamless real-world operation.`,
  },
  {
    title: "Operations & Support",
    desc: `We provide ongoing maintenance and support to ensure smooth system performance, timely issue resolution, and continuous updates for long-term stability and security.`,
  },
];
const AboutUs = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
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
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalHeight = rect.height;
      const visible = windowHeight - rect.top;

      let percent = visible / totalHeight;
      percent = Math.max(0, Math.min(1, percent));

      setProgress(percent);

      const index = Math.floor(percent * timelineData.length);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Header />
      {/* HERO */}
      <div className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content reveal">
          <h1 className="about-hero-title ">
            Creating Value Through Technology. <br />
          </h1>

          <p className="about-hero-subtitle">
            We are a team dedicated to delivering reliable and innovative
            solutions that help businesses grow. With a focus on quality,
            performance, and trust, we turn ideas into impactful digital
            experiences.
          </p>
        </div>
      </div>
      <div className="about-width">
        <div className="aboutUs-container">
          <h1 className="reveal">About KES </h1>
          <p className="reveal">
            KES Pvt. Ltd. (KESPL), headquartered in New Delhi, is a
            technology-focused company specialising in system integration, IT
            services, and IT facility management solutions. The company supports
            organisations in designing, deploying, and managing complex
            technology infrastructure that enables efficient operations and
            secure digital environments.
          </p>
          <p className="reveal">
            KESPL serves both government institutions and enterprise clients,
            providing the technology backbone required for modern digital
            ecosystems. By combining technical expertise with structured
            execution methodologies, the company delivers solutions that ensure
            reliability, scalability, and long-term performance.
          </p>
        </div>
      </div>
      <section className="values-section">
        <div className="container">
          {/* Heading */}
          <h1 className="heading reveal">
            The Value That Drive <br />
            <span>Our Commitment</span>
          </h1>

          <p className="subtext reveal">
            From automation to innovation our cutting-edge AI solutions help
            businesses work smarter, move faster, and grow stronger.
          </p>

          {/* Cards */}
          <div className="cards">
            {/* Card 1 */}
            <div className="card reveal">
              <div className="icon">
                <img
                  src="https://cdn.prod.website-files.com/67bc0582a9859fa021751c94/683775f02f18efdb352633b3_Group%202085666982.svg"
                  alt=""
                />
              </div>
              <h3>India's Digital Future</h3>
              <p>
                India’s digital future is driven by innovation, connectivity,
                and rapid technological growth.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card reveal">
              <div className="icon">
                <img
                  src="https://cdn.prod.website-files.com/67bc0582a9859fa021751c94/683775f04332ee1c4c0e58cd_Group%202085666983.svg"
                  alt=""
                />
              </div>
              <h3>Technical Excellence</h3>
              <p>
                We deliver technical excellence through scalable architecture,
                secure systems, and high-performance solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card reveal">
              <div className="icon">
                <img
                  src="https://cdn.prod.website-files.com/67bc0582a9859fa021751c94/683775f003b875d000d30796_Group%202085666984.svg"
                  alt=""
                />
              </div>
              <h3>Trusted Partnerships</h3>
              <p>
                We build trusted partnerships through transparency, reliability,
                and long-term commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="journey">
        {/* LEFT SIDE */}
        <div className="journey-left reveal-right">
          <h1>
            Project Delivery Framework
            {/* <br /> */}
            <span>How We Deliver</span>
          </h1>

          <p>
            KESPL follows a structured, five-stage project delivery framework
            designed to ensure successful, on-time, and within-scope technology
            implementations — from initial assessment through to sustained
            operational support.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="journey-right" ref={containerRef}>
          <div className="timeline">
            {/* Animated line */}
            <div className="timeline-line">
              <div
                className="timeline-progress"
                style={{ height: `${progress * 100}%` }}
              ></div>
            </div>

            {timelineData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div
                  className={`timeline-dot ${
                    index <= activeIndex ? "active" : ""
                  }`}
                ></div>

                <div className="timeline-content reveal">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
