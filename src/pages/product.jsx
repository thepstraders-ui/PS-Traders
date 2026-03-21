import React, { useState, useCallback } from "react";

const productsData = [
  { id: 1, name: "iPhone 15", category: "mobile", price: 80000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70" },
  { id: 2, name: "Samsung S23", category: "mobile", price: 70000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70" },
  { id: 3, name: "MacBook Air", category: "laptop", price: 120000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/w/n/-original-imah5uhrz7admz28.jpeg?q=70" },
  { id: 4, name: "Dell XPS 13", category: "laptop", price: 100000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70" },
  { id: 5, name: "Canon EOS", category: "camera", price: 60000, img: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/k/7/9/sony-apsc-ilce-6600m-b-in5-mirrorless-original-imafm6nvxhybpwhs.jpeg?q=70" },
  { id: 6, name: "Sony Alpha", category: "camera", price: 90000, img: "https://rukminim2.flixcart.com/image/312/312/kw9krrk0/dslr-camera/6/j/k/-original-imag8z5wzzcgkzva.jpeg?q=70" },
  { id: 7, name: "iPhone 15", category: "mobile", price: 80000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70" },
  { id: 8, name: "Samsung S23", category: "mobile", price: 70000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70" },
  { id: 9, name: "MacBook Air", category: "laptop", price: 120000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/w/n/-original-imah5uhrz7admz28.jpeg?q=70" },
  { id: 10, name: "Dell XPS 13", category: "laptop", price: 100000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70" },
  { id: 11, name: "Canon EOS", category: "camera", price: 60000, img: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/k/7/9/sony-apsc-ilce-6600m-b-in5-mirrorless-original-imafm6nvxhybpwhs.jpeg?q=70" },
  { id: 12, name: "Sony Alpha", category: "camera", price: 90000, img: "https://rukminim2.flixcart.com/image/312/312/kw9krrk0/dslr-camera/6/j/k/-original-imag8z5wzzcgkzva.jpeg?q=70" },
  { id: 12, name: "iPhone 15", category: "mobile", price: 80000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70" },
  { id: 14, name: "Samsung S23", category: "mobile", price: 70000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70" },
  { id: 15, name: "MacBook Air", category: "laptop", price: 120000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/w/n/-original-imah5uhrz7admz28.jpeg?q=70" },
  { id: 16, name: "Dell XPS 13", category: "laptop", price: 100000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70" },
  { id: 17, name: "Canon EOS", category: "camera", price: 60000, img: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/k/7/9/sony-apsc-ilce-6600m-b-in5-mirrorless-original-imafm6nvxhybpwhs.jpeg?q=70" },
  { id: 18, name: "Sony Alpha", category: "camera", price: 90000, img: "https://rukminim2.flixcart.com/image/312/312/kw9krrk0/dslr-camera/6/j/k/-original-imag8z5wzzcgkzva.jpeg?q=70" },
  { id: 19, name: "iPhone 15", category: "mobile", price: 80000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70" },
  { id: 20, name: "Samsung S23", category: "mobile", price: 70000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70" },
  { id: 21, name: "MacBook Air", category: "laptop", price: 120000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/w/n/-original-imah5uhrz7admz28.jpeg?q=70" },
  { id: 22, name: "Dell XPS 13", category: "laptop", price: 100000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70" },
  { id: 23, name: "Canon EOS", category: "camera", price: 60000, img: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/k/7/9/sony-apsc-ilce-6600m-b-in5-mirrorless-original-imafm6nvxhybpwhs.jpeg?q=70" },
  { id: 24, name: "Sony Alpha", category: "camera", price: 90000, img: "https://rukminim2.flixcart.com/image/312/312/kw9krrk0/dslr-camera/6/j/k/-original-imag8z5wzzcgkzva.jpeg?q=70" }
];

const categories = ["all", "mobile", "laptop", "camera"];

// Memoized card component for better performance
const ProductCard = React.memo(({ product }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div style={styles.card}>
      {imageError ? (
        <div style={styles.imagePlaceholder}>
          <p style={styles.placeholderText}>Image not available</p>
        </div>
      ) : (
        <img
          src={product.img}
          alt={product.name}
          style={styles.image}
          onError={() => setImageError(true)}
        />
      )}
      <h3 style={styles.productName}>{product.name}</h3>
      <p style={styles.category}>{product.category.toUpperCase()}</p>
      <p style={styles.price}>₹{product.price.toLocaleString('en-IN')}</p>
      <button style={styles.button} aria-label={`Add ${product.name} to cart`}>
        Visit our Shop
      </button>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

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
    <div style={styles.container}>
      <h1 style={styles.heading}>Products</h1>
      <p style={styles.subtitle}>Browse our collection of electronics</p>

      {/* Filter Buttons */}
      <div style={styles.filterContainer}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            style={{
              ...styles.filterBtn,
              ...(filter === cat ? styles.filterBtnActive : styles.filterBtnInactive)
            }}
            aria-pressed={filter === cat}
            aria-label={`Filter by ${cat}`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p style={styles.resultCount}>
        Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
      </p>

      {/* Product Grid */}
      <div style={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={styles.noResults}>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}


































const styles = {
  container: {
    padding: "40px 20px",
    marginTop: "60px",
    marginBottom: "40px",
    fontFamily: "'Madefor Text', 'Segoe UI', Tahoma, Geneva, sans-serif",
    maxWidth: "1400px",
    margin: "60px auto 40px"
  },
  heading: {
    textAlign: "center",
    marginBottom: "12px",
    fontSize: "clamp(32px, 6vw, 56px)",
    fontWeight: "800",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "-1px"
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    fontSize: "16px",
    marginBottom: "35px"
  },
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "35px",
    flexWrap: "wrap"
  },
  filterBtn: {
    padding: "12px 28px",
    border: "2px solid #ddd",
    cursor: "pointer",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s ease",
    outline: "none",
    fontFamily: "'Madefor Text', sans-serif",
    backgroundColor: "#fff",
    color: "#333"
  },
  filterBtnActive: {
    backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    borderColor: "#667eea",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)"
  },
  filterBtnInactive: {
    backgroundColor: "#fff",
    color: "#333",
    borderColor: "#ddd"
  },
  resultCount: {
    textAlign: "center",
    color: "#666",
    fontSize: "14px",
    marginBottom: "30px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "24px"
  },
  card: {
    border: "1px solid #e0e0e0",
    padding: "16px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    backgroundColor: "#fff"
  },
  cardHover: {
    boxShadow: "0 12px 32px rgba(102, 126, 234, 0.15)",
    transform: "translateY(-8px)",
    borderColor: "#667eea"
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "contain",
    borderRadius: "8px",
    backgroundColor: "#f8f9fa",
    padding: "10px"
  },
  imagePlaceholder: {
    width: "100%",
    height: "220px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  placeholderText: {
    color: "#a0a0a0",
    fontSize: "13px",
    margin: "0"
  },
  productName: {
    fontSize: "15px",
    fontWeight: "700",
    margin: "14px 0 8px",
    color: "#333"
  },
  category: {
    color: "#999",
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "0.8px",
    margin: "0 0 10px",
    textTransform: "uppercase"
  },
  price: {
    fontWeight: "800",
    fontSize: "18px",
    margin: "12px 0",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  },
  button: {
    padding: "11px 18px",
    border: "none",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "13px",
    transition: "all 0.3s ease",
    width: "100%",
    fontFamily: "'Madefor Text', sans-serif",
    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)"
  },
  noResults: {
    gridColumn: "1 / -1",
    textAlign: "center",
    color: "#999",
    padding: "60px 20px",
    fontSize: "16px"
  }
};

export default Product;
