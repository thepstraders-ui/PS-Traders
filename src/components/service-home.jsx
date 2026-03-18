import React from "react";
import "./service-home.css";

const Services = () => {
  return (
    <section className="services">

      <h2 className="services-title">Our Services</h2>

      <div className="services-container">

        <div className="service">
          <hr />
          <h3>Customization</h3>
          <p>Build your dream PC with tailored components</p>
        </div>

        <div className="service">
          <hr />
          <h3>Upgrades</h3>
          <p>Enhance performance with the latest hardware</p>
        </div>

        <div className="service">
          <hr />
          <h3>Support</h3>
          <p>Expert tech advice and troubleshooting assistance</p>
        </div>

        <div className="service">
          <hr />
          <h3>Showcase</h3>
          <p>Exclusive gaming rig designs and setups</p>
        </div>

      </div>

    </section>
  );
};

export default Services;