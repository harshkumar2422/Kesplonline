import React, { useState } from "react";
import "./Header.css";
import MainContainer from "../MainContainer/MainContainer";

const Header = () => {
  const [active, setActive] = useState("Home");

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Innovation",
    "Careers",
    "Contact Us",
  ];

  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-container">
          {/* LOGO */}
          <div className="logo">KSLOGO</div>

          {/* NAV LINKS */}
          <div className="nav-links">
            {menuItems.map((item) => (
              <div
                key={item}
                className={`nav-item ${active === item ? "active" : ""}`}
                onClick={() => setActive(item)}
              >
                {item}
              </div>
            ))}
          </div>

          {/* LOGIN BUTTON */}
          <div className="login-btn">Log In ↗</div>
        </div>
      </div>
      <MainContainer />
    </>
  );
};

export default Header;
