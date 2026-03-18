import React from "react";
import "./footer-home.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">

          <h2 className="footer-logo">PS. TRADERS</h2>

          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
          </div>

          <p>123-456-7890</p>
          <p>info@mysite.com</p>
          <p>500 Terry Francine St. San Francisco, CA 94158</p>

        </div>


        <div className="footer-right">

          <a href="#">Privacy Policy</a>
          <a href="#">Accessibility Statement</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund Policy</a>

        </div>

      </div>


      <div className="footer-bottom">
        © 2035 by PS. TRADERS
      </div>

    </footer>
  );
};

export default Footer;