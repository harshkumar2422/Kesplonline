import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

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

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Innovation", path: "/innovation" },
    { name: "Careers", path: "/careers" },
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
      name: "Emerging Technologies",
      path: "/services/emerging-technologies-services",
    },
    {
      name: "Digital Transformation",
      path: "/services/digital-transformation-services",
    },
  ];

  return (
    <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img
              src="https://www.kesplonline.com/images/icons/ic-logo-02.png"
              alt="logo"
            />
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
            <span className="dropdown-title">Services ▾</span>

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
            onClick={() => setMenuOpen(!menuOpen)}
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
