import { useCart } from "./context/useCart";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  return (
    <section className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <div className="cart-container">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>{item.unit}</p>
              </div>

              <div className="cart-price">
                ₹{item.price} × {item.qty}
              </div>
            </div>
          ))}

          
<button
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Proceed to Checkout
</button>
        </div>
      )}
    </section>
  );
}
