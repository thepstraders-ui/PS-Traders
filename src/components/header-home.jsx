import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header-home.css";
import { FaCameraRetro } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function Header() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <div className="logo-text">PS. Traders</div>
        </div>

        <div className={`menu ${mobileMenuOpen ? "menu-open" : ""}`}>
          <div className="menu-item" onClick={() => handleNavClick("/")}>
            Home
          </div>
          <div className="menu-item" onClick={() => handleNavClick("/product")}>
            Products
          </div>
          <div className="menu-item" onClick={() => handleNavClick("/service")}>
            Service
          </div>
          <div className="menu-item" onClick={() => handleNavClick("/about")}>
            About Us
          </div>
        </div>

        <div className="actions">
          <div 
            className="hamburger-menu" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <MdClose size={28} />
            ) : (
              <GiHamburgerMenu size={28} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;