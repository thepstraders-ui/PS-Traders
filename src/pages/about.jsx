import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-container">

          <div className="about-left">
            <h2>Discover Our Story</h2>

            <p>
              At C. Patel, we are passionate about providing cutting-edge
              technology products to both gamers and professionals.
            </p>

            <p>
              Our custom-built rigs, components, and peripherals are designed
              for optimal performance and quality.
            </p>

            <p>
              We also offer tutorials, tech advice, and consultations to help
              customers build their ideal systems.
            </p>

            <img
              src="https://static.wixstatic.com/media/88aac0_fbea73e05e1a41a1bfc6590931a7fe86~mv2.png"
              alt="gaming setup"
              className="about-small-image"
            />
          </div>

          <div className="about-right">
            <img
              src="https://static.wixstatic.com/media/88aac0_1eba293c178e4d5cbe6e89575bae11f7~mv2.png"
              alt="pc build"
            />
          </div>

        </div>
      </section>


      {/* Mission Section */}

      {/* <section className="mission">

        <h2>Mission</h2>
        <h4>Empowering Technology Enthusiasts</h4>

        <p>
          Our mission at C. Patel is to provide high-performance processors,
          graphics cards, and custom-built rigs to enhance gaming and
          professional experiences.
        </p>

        <p>
          Driven by innovation and performance, we aim to create a seamless
          experience for technology enthusiasts while delivering exceptional
          customer service.
        </p>

        <button className="products-btn">
          Our Products
        </button>

      </section> */}
    </>
  );
};

export default About;