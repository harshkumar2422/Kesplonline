import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import headerlogo from "./headerlogo.png";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // 🔥 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setDropdownOpen(false);
    };

    if (dropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const serviceItems = [
    { name: "System Integration", path: "/services/system-integration" },
    { name: "IT Services", path: "/services/it-services" },
    {
      name: "Facility Management",
      path: "/services/facility-management-services",
    },
    {
      name: "IT Staffing & Augmentation",
      path: "/services/it-staffing-augmentation-services",
    },
    {
      name: "Digital Marketing",
      path: "/services/digital-marketing-services",
    },
    {
      name: "IOT",
      path: "/services/iot-services",
    },
    {
      name: "Business Intelligence Solutions",
      path: "/services/business-intelligence-solutions-services",
    },
    {
      name: "Government Sector Engagement",
      path: "/services/government-sector-engagement-services",
    },
    {
      name: "BPO",
      path: "/services/bpo-services",
    },
    {
      name: "Cyber Security",
      path: "/services/cyber-security-services",
    },
  ];

  return (
    <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img src={headerlogo} alt="kes" />
          </Link>
        </div>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {menuItems.slice(0, 2).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-item ${active === item.name ? "active" : ""}`}
              onClick={() => {
                setActive(item.name);
                setMenuOpen(false);
                setDropdownOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}

          {/* SERVICES DROPDOWN */}
          <div
            className="nav-item dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span
              className="dropdown-title"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen((prev) => !prev);
              }}
            >
              Services ▾
            </span>

            <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              {serviceItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="dropdown-item"
                  onClick={() => {
                    setActive("Services");
                    setMenuOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {menuItems.slice(2).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-item ${active === item.name ? "active" : ""}`}
              onClick={() => {
                setActive(item.name);
                setMenuOpen(false);
                setDropdownOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="right-section">
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => {
              setMenuOpen(!menuOpen);
              setDropdownOpen(false);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
