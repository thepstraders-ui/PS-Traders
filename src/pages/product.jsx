import React, { useState, useCallback } from "react";
import "./product.css";

const productsData = [
  {
    id: 1,
    name: "iPhone 15",
    category: "mobile",
    price: 80000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70",
  },
  {
    id: 2,
    name: "Samsung S23",
    category: "mobile",
    price: 70000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70",
  },
  {
    id: 3,
    name: "MacBook Air",
    category: "laptop",
    price: 120000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/w/n/-original-imah5uhrz7admz28.jpeg?q=70",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    category: "laptop",
    price: 100000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70",
  },
  {
    id: 5,
    name: "Canon EOS",
    category: "camera",
    price: 60000,
    img: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/k/7/9/sony-apsc-ilce-6600m-b-in5-mirrorless-original-imafm6nvxhybpwhs.jpeg?q=70",
  },
  {
    id: 6,
    name: "Sony Alpha",
    category: "camera",
    price: 90000,
    img: "https://rukminim2.flixcart.com/image/312/312/kw9krrk0/dslr-camera/6/j/k/-original-imag8z5wzzcgkzva.jpeg?q=70",
  },
  {
    id: 7,
    name: "iPhone 15",
    category: "mobile",
    price: 80000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70",
  },
  {
    id: 8,
    name: "Samsung S23",
    category: "mobile",
    price: 70000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70",
  },
  {
    id: 9,
    name: "MacBook Air",
    category: "laptop",
    price: 120000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/w/n/-original-imah5uhrz7admz28.jpeg?q=70",
  },
  {
    id: 10,
    name: "Dell XPS 13",
    category: "laptop",
    price: 100000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70",
  },
  {
    id: 11,
    name: "Canon EOS",
    category: "camera",
    price: 60000,
    img: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/k/7/9/sony-apsc-ilce-6600m-b-in5-mirrorless-original-imafm6nvxhybpwhs.jpeg?q=70",
  },
  {
    id: 12,
    name: "Sony Alpha",
    category: "camera",
    price: 90000,
    img: "https://rukminim2.flixcart.com/image/312/312/kw9krrk0/dslr-camera/6/j/k/-original-imag8z5wzzcgkzva.jpeg?q=70",
  },
  {
    id: 13,
    name: "iPhone 15",
    category: "mobile",
    price: 80000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70",
  },
  {
    id: 14,
    name: "Samsung S23",
    category: "mobile",
    price: 70000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70",
  },
  {
    id: 15,
    name: "MacBook Air",
    category: "laptop",
    price: 120000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/w/n/-original-imah5uhrz7admz28.jpeg?q=70",
  },
  {
    id: 16,
    name: "Dell XPS 13",
    category: "laptop",
    price: 100000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70",
  },
  {
    id: 17,
    name: "Canon EOS",
    category: "camera",
    price: 60000,
    img: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/k/7/9/sony-apsc-ilce-6600m-b-in5-mirrorless-original-imafm6nvxhybpwhs.jpeg?q=70",
  },
  {
    id: 18,
    name: "Sony Alpha",
    category: "camera",
    price: 90000,
    img: "https://rukminim2.flixcart.com/image/312/312/kw9krrk0/dslr-camera/6/j/k/-original-imag8z5wzzcgkzva.jpeg?q=70",
  },
  {
    id: 19,
    name: "iPhone 15",
    category: "mobile",
    price: 80000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70",
  },
  {
    id: 20,
    name: "Samsung S23",
    category: "mobile",
    price: 70000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70",
  },
  {
    id: 21,
    name: "MacBook Air",
    category: "laptop",
    price: 120000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/w/n/-original-imah5uhrz7admz28.jpeg?q=70",
  },
  {
    id: 22,
    name: "Dell XPS 13",
    category: "laptop",
    price: 100000,
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70",
  },
  {
    id: 23,
    name: "Canon EOS",
    category: "camera",
    price: 60000,
    img: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/k/7/9/sony-apsc-ilce-6600m-b-in5-mirrorless-original-imafm6nvxhybpwhs.jpeg?q=70",
  },
  {
    id: 24,
    name: "Sony Alpha",
    category: "camera",
    price: 90000,
    img: "https://rukminim2.flixcart.com/image/312/312/kw9krrk0/dslr-camera/6/j/k/-original-imag8z5wzzcgkzva.jpeg?q=70",
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
