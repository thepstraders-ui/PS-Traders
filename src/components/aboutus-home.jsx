import React from "react";
import "./aboutus-home.css";

const About = () => {
  return (
    <section className="about-section">
      
      <div className="about-container">

        <div className="about-left">
          <h2>About Us</h2>
        </div>

        <div className="about-right">
          <p>
            At C. Patel, we are passionate about providing cutting-edge
            technology solutions. Our focus on quality and performance ensures
            that our customers receive the best products tailored to their
            needs. From custom rigs to exclusive collaborations, we strive to
            elevate your tech experience.
          </p>

          <button className="vision-btn">Our Vision</button>
        </div>

      </div>

      <div className="about-image">
        <img
          src="https://static.wixstatic.com/media/88aac0_42ebfb7b77fd4f1886c8f2c1ea648076~mv2.webp"
          alt="about"
        />
      </div>

    </section>
  );
};

export default About;