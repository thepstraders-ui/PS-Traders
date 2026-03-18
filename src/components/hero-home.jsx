import React, { useState } from "react";
import "./hero-home.css";
import img1 from '../assets/img1.jpg';

function Hero() {
  const images = [
    "https://static.wixstatic.com/media/88aac0_a2987ba349d14bfa9a7f3599ddbb1806~mv2.png",
    "https://static.wixstatic.com/media/88aac0_a2987ba349d14bfa9a7f3599ddbb1806~mv2.png",
    "https://static.wixstatic.com/media/88aac0_a2987ba349d14bfa9a7f3599ddbb1806~mv2.png",
    "https://static.wixstatic.com/media/88aac0_a2987ba349d14bfa9a7f3599ddbb1806~mv2.png",
    "https://static.wixstatic.com/media/88aac0_f098d2f9382249c39529ca3d9964512a~mv2.png"
  ];

  const [index, setIndex] = useState(0);

  return (
    <section className="hero">

      {/* Background Grid */}
      <div className="grid-bg">
        <img
          src={img1}
          alt=""
        />
      </div>
      

      <div className="hero-content">

        <h1 className="hero-title">Innovative Tech Gear</h1>

        <p className="hero-desc">
          Discover a world of tech excellence with our top-of-the-line products.
          We offer custom-built rigs, high-performance components, and exclusive
          peripherals for all tech enthusiasts.
        </p>

        <button className="hero-btn">Shop Now</button>

      </div>

      {/* Carousel */}
      <div className="hero-products">
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 33.33}%)` }}
          >
            {images.map((img, i) => (
              <div className="product-img" key={i}>
                <img src={img} alt="product" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;