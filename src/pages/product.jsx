import React, { useState, useCallback } from "react";

const productsData = [
  { id: 1, name: "iPhone 15", category: "mobile", price: 80000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70" },
  { id: 2, name: "Samsung S23", category: "mobile", price: 70000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70" },
  { id: 3, name: "MacBook Air", category: "laptop", price: 120000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/w/n/-original-imah5uhrz7admz28.jpeg?q=70" },
  { id: 4, name: "Dell XPS 13", category: "laptop", price: 100000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70" },
  { id: 5, name: "Canon EOS", category: "camera", price: 60000, img: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/k/7/9/sony-apsc-ilce-6600m-b-in5-mirrorless-original-imafm6nvxhybpwhs.jpeg?q=70" },
  { id: 6, name: "Sony Alpha", category: "camera", price: 90000, img: "https://rukminim2.flixcart.com/image/312/312/kw9krrk0/dslr-camera/6/j/k/-original-imag8z5wzzcgkzva.jpeg?q=70" },
  { id: 1, name: "iPhone 15", category: "mobile", price: 80000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70" },
  { id: 2, name: "Samsung S23", category: "mobile", price: 70000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70" },
  { id: 3, name: "MacBook Air", category: "laptop", price: 120000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/w/n/-original-imah5uhrz7admz28.jpeg?q=70" },
  { id: 4, name: "Dell XPS 13", category: "laptop", price: 100000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70" },
  { id: 5, name: "Canon EOS", category: "camera", price: 60000, img: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/k/7/9/sony-apsc-ilce-6600m-b-in5-mirrorless-original-imafm6nvxhybpwhs.jpeg?q=70" },
  { id: 6, name: "Sony Alpha", category: "camera", price: 90000, img: "https://rukminim2.flixcart.com/image/312/312/kw9krrk0/dslr-camera/6/j/k/-original-imag8z5wzzcgkzva.jpeg?q=70" },
  { id: 1, name: "iPhone 15", category: "mobile", price: 80000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70" },
  { id: 2, name: "Samsung S23", category: "mobile", price: 70000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70" },
  { id: 3, name: "MacBook Air", category: "laptop", price: 120000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/w/n/-original-imah5uhrz7admz28.jpeg?q=70" },
  { id: 4, name: "Dell XPS 13", category: "laptop", price: 100000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70" },
  { id: 5, name: "Canon EOS", category: "camera", price: 60000, img: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/k/7/9/sony-apsc-ilce-6600m-b-in5-mirrorless-original-imafm6nvxhybpwhs.jpeg?q=70" },
  { id: 6, name: "Sony Alpha", category: "camera", price: 90000, img: "https://rukminim2.flixcart.com/image/312/312/kw9krrk0/dslr-camera/6/j/k/-original-imag8z5wzzcgkzva.jpeg?q=70" },
  { id: 1, name: "iPhone 15", category: "mobile", price: 80000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/q/h/-original-imahgfmzjj8gtqbc.jpeg?q=70" },
  { id: 2, name: "Samsung S23", category: "mobile", price: 70000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70" },
  { id: 3, name: "MacBook Air", category: "laptop", price: 120000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/w/n/-original-imah5uhrz7admz28.jpeg?q=70" },
  { id: 4, name: "Dell XPS 13", category: "laptop", price: 100000, img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70" },
  { id: 5, name: "Canon EOS", category: "camera", price: 60000, img: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/k/7/9/sony-apsc-ilce-6600m-b-in5-mirrorless-original-imafm6nvxhybpwhs.jpeg?q=70" },
  { id: 6, name: "Sony Alpha", category: "camera", price: 90000, img: "https://rukminim2.flixcart.com/image/312/312/kw9krrk0/dslr-camera/6/j/k/-original-imag8z5wzzcgkzva.jpeg?q=70" }
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
    padding: "20px",
    marginTop: "30px",
    marginBottom: "30px",
    fontFamily: '"Segoe UI", Tahoma, Geneva, sans-serif',
    maxWidth: "1200px",
    margin: "30px auto"
  },
  heading: {
    textAlign: "center",
    marginBottom: "8px",
    fontSize: "32px",
    fontWeight: "600",
    color: "#000"
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    fontSize: "14px",
    marginBottom: "30px"
  },
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "25px",
    flexWrap: "wrap"
  },
  filterBtn: {
    padding: "10px 20px",
    border: "1px solid #000",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: "14px",
    transition: "all 0.2s ease",
    outline: "none"
  },
  filterBtnActive: {
    backgroundColor: "#000",
    color: "#fff"
  },
  filterBtnInactive: {
    backgroundColor: "#fff",
    color: "#000"
  },
  resultCount: {
    textAlign: "center",
    color: "#666",
    fontSize: "14px",
    marginBottom: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    backgroundColor: "#fff"
  },
  cardHover: {
    boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
    transform: "translateY(-4px)"
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5"
  },
  imagePlaceholder: {
    width: "100%",
    height: "200px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  placeholderText: {
    color: "#999",
    fontSize: "14px",
    margin: "0"
  },
  productName: {
    fontSize: "16px",
    fontWeight: "600",
    margin: "12px 0 8px",
    color: "#000"
  },
  category: {
    color: "#999",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.5px",
    margin: "0 0 8px"
  },
  price: {
    fontWeight: "700",
    fontSize: "18px",
    margin: "10px 0",
    color: "#000"
  },
  button: {
    padding: "10px 16px",
    border: "none",
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.2s ease",
    width: "100%"
  },
  noResults: {
    gridColumn: "1 / -1",
    textAlign: "center",
    color: "#999",
    padding: "40px 20px",
    fontSize: "16px"
  }
};

export default Product;
