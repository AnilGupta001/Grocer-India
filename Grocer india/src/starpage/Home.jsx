import ProductCard from "../components/ProductCard";
import InfoPopup from "./context/InfoPopup.jsx";

const featuredProducts = [
  {
    id: 101,
    name: "Fresh Apples",
    price: 120,
    unit: "1 Kg",
    image:
      "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
  },
  {
    id: 102,
    name: "Bananas",
    price: 60,
    unit: "12 pcs",
    image:
      "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg",
  },
  {
    id: 103,
    name: "Tomatoes",
    price: 40,
    unit: "1 Kg",
    image:
      "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg",
  },
  {
    id: 104,
    name: "Milk",
    price: 55,
    unit: "1 Litre",
    image:
      "https://images.pexels.com/photos/416656/pexels-photo-416656.jpeg",
  },
];

function Home() {
  return (
    <>
      <InfoPopup />

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Fresh Groceries Delivered Fast</h1>
            <p>
              Fruits, vegetables, dairy & daily essentials at best prices
            </p>
            <button className="hero-btn">Shop Now</button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="home-features">
        <div className="feature-box">
          🚚
          <h4>Fast Delivery</h4>
          <p>Within hours</p>
        </div>
        <div className="feature-box">
          🥦
          <h4>Fresh Products</h4>
          <p>Farm to home</p>
        </div>
        <div className="feature-box">
          💰
          <h4>Best Prices</h4>
          <p>Save more daily</p>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="home-products">
        <div className="home-products-header">
          <h2>Featured Products</h2>
          <p>Popular items customers love</p>
        </div>

        <div className="product-grid">
          {featuredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
