// Services.jsx
import React from "react";
import "./services.css";
import { CiLocationArrow1 } from "react-icons/ci";

function Services() {
  return (
    <div className="services">
      <div className="hero-page-title-top">
        <h1 className="service-page-title">Our Services</h1>
        <p className="service-page-desc">
          We provide excellent service for mobile phones and laptops, handling
          everything from screen replacements to hardware repairs. Our skilled
          technicians deliver fast, reliable solutions with competitive pricing.
          Whether it's a cracked screen, battery issues, or software problems,
          we fix it right the first time. Trust us for quality repairs you can
          depend on.
        </p>
      </div>

      <div className="services-grid">
        <div className="services-item">
          <div className="services-item-header">
            01
            <CiLocationArrow1 size={30} className="services-item-arrow" />
          </div>
          <div className="services-item-title">CCTV Installation & Repair</div>
          <p>
            We provide professional CCTV installation for homes, offices, and
            businesses. Our services include installation of dome, bullet, and
            IP cameras, along with troubleshooting and maintenance for issues
            like recording failures, connectivity problems, and hardware faults.
          </p>
        </div>
        <div className="services-item">
          <div className="services-item-header">
            02
            <CiLocationArrow1 size={30} className="services-item-arrow" />
          </div>
          <div className="services-item-title">Mobile Repairing</div>
          <p>
            We repair all major mobile issues including screen damage, battery
            problems, charging faults, software errors, speaker issues, and
            water damage, using quality parts and efficient techniques.
          </p>
        </div>
        <div className="services-item">
          <div className="services-item-header">
            03
            <CiLocationArrow1 size={30} className="services-item-arrow" />
          </div>
          <div className="services-item-title">Mobile & Laptop Accessories</div>
          <p>
            We offer a wide range of high-quality accessories for both mobile
            phones and laptops, including mobile covers, tempered glass,
            chargers, cables, earphones, power banks, and memory cards. For
            laptops, we provide essentials like bags, cooling pads, chargers,
            and external keyboards to enhance performance, protection, and
            usability.
          </p>
        </div>
        <div className="services-item">
          <div className="services-item-header">
            04
            <CiLocationArrow1 size={30} className="services-item-arrow" />
          </div>
          <div className="services-item-title">Laptop Repairing</div>
          <p>
            Our laptop services include screen replacement, keyboard repair,
            battery replacement, overheating fixes, OS installation, virus
            removal, and data recovery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
