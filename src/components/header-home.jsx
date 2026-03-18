import React from "react";
import { useNavigate } from "react-router-dom";
import "./header-home.css";
import { FaCameraRetro } from "react-icons/fa6";
function Header() {

  const navigate = useNavigate();

  return (
    <header className="site-header">
      <div className="container">

        <div className="logo">
          <div className="logo-text">PS. Traders</div>
        </div>

        <div className="menu">
          <div className="menu-item" onClick={() => navigate("/")}>
            Home
          </div>

          <div className="menu-item" onClick={() => navigate("/shop")}>
            Products
          </div>
          
          <div className="menu-item" onClick={() => navigate("/service")}>
            Service
          </div>
          <div className="menu-item" onClick={() => navigate("/about")}>
            About Us
          </div>
        </div>

        <div className="actions">
          <div className="login-btn"><FaCameraRetro size={20}/></div>
        </div>

      </div>
    </header>
  );
}

export default Header;