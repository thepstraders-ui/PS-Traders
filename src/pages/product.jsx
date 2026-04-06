import React, { useState, useCallback } from "react";
import "./product.css";

import cpWar18m from "../assets/cp-war18m.jpeg"
import cpPlusP31q from "../assets/cp-plus-p31q.jpeg"
import C4kHdmiCable from "../assets/4k-hdmi-cable.jpeg"
import cpPlus_2_4mp_dome_camera from "../assets/cp-plus-2.4mp-dome-camera.jpeg"
import cp_plus_2_4mp from "../assets/cp-plus-2.4mp.jpeg"
import cp_plus_2camera_setup from "../assets/cp-plus-2camera-setup.jpeg"
import cp_plus_4camera from "../assets/cp-plus-4camera.jpeg"
import cp_plus_4ch_dvr from "../assets/cp-plus-4ch-dvr.jpeg"
import cp_plus_8_camera from "../assets/cp-plus-8-camera.jpeg"
import cp_plus_8ch_dvr from "../assets/cp-plus-8ch-dvr.jpeg"
import cp_plus_p31q from "../assets/cp-plus-p31q.jpeg"
import zebronics_k65_keyboard from "../assets/zebronics-k65-keyboard.jpeg"

const productsData = [
  {
    id: 1,
    name: "Cp plus 8ch power supply , Warranty 18 months",
    category: "power",
    price: 700,
    img: cpWar18m,
  },
  {
    id: 2,
    name: "Cp plus e31Q  wifi camera 3mp Crystal clear view ",
    category: "camera",
    price: 2200,
    img: cpPlusP31q,
  },
  {
    id: 3,
    name: "Zebronics k65 board ",
    category: "keyboard",
    price: 250,
    img: zebronics_k65_keyboard,
  },
  {
    id: 4,
    name: "Cp plus dvr 8ch",
    category: "dvr",
    price: 100000,
    img: cp_plus_8ch_dvr,
  },
  {
    id: 5,
    name: "Cp plus 4 camera complete set up One year warranty",
    category: "camera",
    price: 11599,
    img:cp_plus_4camera,
  },
  {
    id: 6,
    name: "Cp plus 2.4 mp bullet camera mic with colour Night vision colour view.",
    category: "camera",
    price: 1550,
    img: cp_plus_2_4mp,
  },
  {
    id: 7,
    name: "Cp plus 2.4 mp dome camera full colour with mic Day and night colour ",
    category: "camera",
    price: 1400,
    img: cpPlus_2_4mp_dome_camera,
  },
  {
    id: 8,
    name: "4k HDMI cable 1.5 meter ",
    category: "cable",
    price: 299,
    img: C4kHdmiCable,
  },
  {
    id: 9,
    name: "Cp plus 4ch dvr ",
    category: "dvr",
    price: 2900,
    img: cp_plus_4ch_dvr,
  },
  {
    id: 10,
    name: "Cp plus 2 camera set up 500 gb hard disk 60 meter wire Bnc connecter 4Dc connecter",
    category: "camera",
    price: NaN,
    img: cp_plus_2camera_setup,
  },
   {
    id: 11,
    name: "  Cp plus 8 camera complete set up One year warranty",
    category: "camera",
    price: 20000,
    img: cp_plus_8_camera,
  }, {
    id: 12,
    name: "Cp plus e31Q  wifi camera 3mp Crystal clear view ",
    category: "camera",
    price: 2200,
    img:cpPlusP31q,
  },







  
];

const categories = ["all", "mobile", "laptop", "camera"];
const ProductCard = React.memo(({ product }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="profuct-page-card">
      {imageError ? (
        <div className="image-placeholder">
          <p className="placeholder-text">Image not available</p>
        </div>
      ) : (
        <img
          src={product.img}
          alt={product.name}
          className="profuct-page-image"
          onError={() => setImageError(true)}
        />
      )}
      <h3 className="profuct-page-name">{product.name}</h3>
      <p className="profuct-page-price">₹{product.price.toLocaleString("en-IN")}</p>
      <button
        className="profuct-page-button"
        aria-label={`Add ${product.name} to cart`}
      >
        Visit our Shop
      </button>
    </div>
  );
});

ProductCard.displayName = "ProductCard";












function Product() {
  const [filter, setFilter] = useState("all");

  // Use useCallback to memoize filter function
  const filteredProducts = useCallback(() => {
    return filter === "all"
      ? productsData
      : productsData.filter((p) => p.category === filter);
  }, [filter])();

  const handleFilterChange = useCallback((category) => {
    setFilter(category);
  }, []);

  return (
    <div className="profuct-page-container">
      <div className="profuct-page-page-title-div">
        <h1 className="profuct-page-heading">Explore Our Products</h1>
        <p className="profuct-page-subtitle">Browse our collection of electronics</p>
      </div>
      {/* Filter Buttons */}
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`filter-btn ${filter === cat ? "active" : "inactive"}`}
            aria-pressed={filter === cat}
            aria-label={`Filter by ${cat}`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Results count */}
      {/* <div className="result-count">
        Showing {filteredProducts.length} product
        {filteredProducts.length !== 1 ? "s" : ""}
      </div> */}

      {/* Product Grid */}
      <div className="profuct-page-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-results">No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Product;
