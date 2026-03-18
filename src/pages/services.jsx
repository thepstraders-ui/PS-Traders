// Services.jsx
import React from "react";
import "./services.css";
import { CiLocationArrow1 } from "react-icons/ci";

function Services() {
  return (
    <div className="services">
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
