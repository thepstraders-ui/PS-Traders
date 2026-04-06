import React from "react";
import "./footer-home.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">

          <h2 className="footer-logo">PS. TRADERS</h2>

          <div className="socials">
            <a href="https://www.instagram.com/p/DVL2g7dDMfD/">Instagram</a>
            <a href="https://www.facebook.com/sudeep.patel.5492">Facebook</a>
          
          </div>

          <p>+91 95590 67828</p>
          <p>Papinia ,Mallawan 241303 Hardoi UP</p>

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