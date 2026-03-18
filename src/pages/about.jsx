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
              Welcome to our store—your trusted destination for CCTV
              installation and repair, mobile phone repairing and accessories,
              and laptop repair and accessories. We are committed to delivering
              reliable technology services and high-quality products that help
              individuals, families, and businesses stay connected, productive,
              and secure.
            </p>

            <p>
              In today’s digital world, devices like smartphones, laptops, and
              security systems are essential. When they stop working or need
              installation, it can disrupt daily life. That’s why we focus on
              providing fast, professional, and affordable solutions to get your
              devices back up and running smoothly.
            </p>

            <p>
              Our shop was founded with a vision to offer complete technology
              solutions under one roof. With skilled technicians and modern
              tools, we ensure dependable repair services and installation
              support across a wide range of devices. We prioritize quality,
              transparency, and customer satisfaction in everything we do.
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
