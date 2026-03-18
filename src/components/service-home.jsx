import React from "react";
import "./service-home.css";

const Services = () => {
  return (
    <section className="services">

      <h2 className="services-title">Our Services</h2>

      <div className="services-container">

        <div className="service">
          <hr />
          <h3>CCTV Installation & Repair</h3>
        </div>

        <div className="service">
          <hr />
          <h3>Mobile Repairing</h3>
        </div>

        <div className="service">
          <hr />
          <h3>Mobile & Laptop Accessories</h3>
        </div>

        <div className="service">
          <hr />
          <h3>Laptop Repairing</h3>
        </div>

      </div>

    </section>
  );
};

export default Services;