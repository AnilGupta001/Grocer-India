import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const API_URL =
  "https://696353f42d146d9f58d32f7b.mockapi.io/products";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  }

  return (
    <section className="products-page">
      <div className="products-header">
        <h1>Fresh Groceries</h1>
        <p>Handpicked fruits, vegetables & daily essentials</p>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}

export default Products;
