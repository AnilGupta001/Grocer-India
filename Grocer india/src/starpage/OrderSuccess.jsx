import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <section className="order-success">
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Your groceries will be delivered soon.</p>

      <Link to="/products" className="success-btn">
        Continue Shopping
      </Link>
    </section>
  );
}
