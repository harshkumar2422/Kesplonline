import React, { useEffect } from "react";
import "./AboutUs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import aboutimg from "./aboutbgimg.jpg";
import abhinavpaulimg from "./Abinavpaul.png";
import rajanmalikimg from "./Rajanmalik.jpeg";

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
      <Header />
      {/* HERO */}
      <div
        className="about-hero"
        style={{ backgroundImage: `url(${aboutimg})` }}
      >
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
      {/* ...abhinavpaul sir */}
      <section className="leadership">
        <div className="leadership-container">
          {/* IMAGE SIDE */}
          <div className="leadership-image">
            <div className="image-card reveal">
              <img src={abhinavpaulimg} alt="Managing Director" />
              <div className="image-overlay">
                <h3>Abhinav Paul</h3>
                <p>Managing Director</p>
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="leadership-content">
            <h1 reveal>
              Managing Director
              <span className="reveal">From the Desk of Leadership</span>
            </h1>

            <p className="reveal">
              Abhinav Paul is a technology-driven business leader with deep
              expertise in building and scaling data-centric and digital-first
              enterprises. With a strong foundation across analytics, platform
              engineering, and enterprise technology ecosystems, he brings a
              strategic vision that blends innovation with execution.
            </p>

            <p className="reveal">
              Over the course of his career, Abhinav has worked with some of the
              most dynamic organizations in the digital commerce and technology
              space, where he has led high-impact initiatives in data science,
              intelligent automation, and large-scale operational optimization.
              His work has consistently focused on leveraging technology to
              drive measurable business outcomes—ranging from advanced
              forecasting systems to AI-driven decision frameworks.
            </p>

            <p className="reveal">
              As Managing Director, Abhinav is responsible for defining the
              company’s long-term vision, strengthening its technology
              capabilities, and positioning the organization at the forefront of
              next-generation IT and AI-led transformation. He is deeply
              committed to building intelligent infrastructure, enabling
              scalable solutions, and fostering a culture of innovation and
              performance excellence.
            </p>
            <p className="reveal">
              His leadership philosophy centers on integrating advanced
              technology with real-world business applications—ensuring that
              digital transformation is not just theoretical, but delivers
              tangible impact across industries.
            </p>
            <div className="vision-box reveal">
              <h3>Vision</h3>
              <p>
                To build a future-ready technology organization that leverages
                AI, data intelligence, and engineering excellence to create
                scalable, resilient, and globally competitive solutions.
              </p>
            </div>

            <div className="leadership-areas">
              <h3 className="reveal">Core Leadership Areas</h3>
              <ul>
                <li className="reveal">AI & Data Strategy</li>
                <li className="reveal">
                  Intelligent Infrastructure & Automation
                </li>
                <li className="reveal">Enterprise Technology Transformation</li>
                <li className="reveal">Digital Platform Development</li>
                <li className="reveal">Scalable Business Models</li>
                <li className="reveal">Innovation & Growth Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ...rajan malik sir */}
      <section className="leadership">
        <div className="leadership-container rajan-leadership-container">
          {/* CONTENT SIDE */}
          <div className="leadership-content">
            <h1 className="reveal">
              Strategic Advisor – Business Excellence
              <span className="reveal">
                Data Centre Man" with highest Number of DC projects executed by
                a Professional! + Cloud Strategy + Government Projects +
                Business Management + Think Tank + Evangelist + Author
              </span>
            </h1>

            <p className="reveal">
              Rajan Malik is a seasoned business leader with over three decade
              of experience in driving operational excellence, scaling
              multi-unit enterprises, and delivering sustained profitability
              across dynamic markets. With a strong foundation in process
              optimization and performance management, he brings a sharp
              strategic lens to organizations navigating growth and
              transformation.
            </p>

            <p className="reveal">
              Throughout his career, Rajan has successfully led large-scale
              operations, streamlined business functions, and implemented
              data-driven decision-making frameworks that enhance efficiency and
              customer experience. His expertise spans business operations, cost
              optimization, supply chain coordination, and organizational
              restructuring—making him a valuable asset in high-growth and
              technology-driven environments.
            </p>

            <p className="reveal">
              As an Advisor, Rajan provides strategic guidance on building
              scalable operating models, improving execution discipline, and
              aligning business strategy with measurable outcomes. His
              cross-industry perspective enables companies to bridge the gap
              between technology deployment and real-world business impact.
            </p>
            <p className="reveal">
              Rajan is particularly focused on helping organizations evolve into
              agile, performance-oriented enterprises by integrating operational
              intelligence with innovation.
            </p>

            <div className="leadership-areas ">
              <h3 className="reveal">Key Areas of Expertise</h3>
              <ul>
                <li className="reveal">Operational Strategy & Execution</li>
                <li className="reveal">Business Process Optimization</li>
                <li className="reveal">
                  Cost Control & Efficiency Enhancement
                </li>
                <li className="reveal">Scaling Multi-Location Operations</li>
                <li className="reveal">Performance Management Systems</li>
                <li className="reveal">Customer Experience Optimization</li>
              </ul>
            </div>
            <div className="leadership-areas">
              <h3 className="reveal">Advisory Impact</h3>
              <ul>
                <li className="reveal">
                  Strengthen operational foundations for rapid growth
                </li>
                <li className="reveal">
                  Improve profitability through structured interventions
                </li>
                <li className="reveal">
                  Drive accountability and performance culture
                </li>
                <li className="reveal">
                  Translate strategic vision into executable frameworks
                </li>
              </ul>
            </div>
          </div>
          {/* IMAGE SIDE */}
          <div className="leadership-image">
            <div className="image-card reveal">
              <img src={rajanmalikimg} alt="Managing Director" />
              <div className="image-overlay">
                <h3>Rajan Malik</h3>
                <p>Strategic Advisor – Business Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
