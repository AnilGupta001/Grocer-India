import { useState } from "react";
import { useAuth } from "../starpage/context/AuthContext";
import { useCart } from "../starpage/context/useCart";
import { Navigate, useNavigate } from "react-router-dom";

const USER_API = "https://696353f42d146d9f58d32f7b.mockapi.io/users";

export default function Checkout() {
  const { user } = useAuth();
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [phone, setPhone] = useState(user?.phone || "");
  const [phoneSaved, setPhoneSaved] = useState(!!user?.phone);
  const [loading, setLoading] = useState(false);

  // 🔐 Protect checkout
  if (!user) return <Navigate to="/login" />;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // 📱 SAVE PHONE NUMBER
  const savePhoneNumber = async () => {
    if (!phone || phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    setLoading(true);

    const updatedUser = {
      ...user,
      phone,
    };

    await fetch(`${USER_API}/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setPhoneSaved(true);
    setLoading(false);
  };

  // 🛒 PLACE ORDER
  const placeOrder = async () => {
    const order = {
      orderId: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString(),
      totalAmount,
      orderItems: cartItems,
    };

    const updatedOrders = user.UserOrderDetails
      ? [...user.UserOrderDetails, order]
      : [order];

    const updatedUser = {
      ...user,
      phone,
      UserOrderDetails: updatedOrders,
    };

    await fetch(`${USER_API}/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });

    localStorage.setItem("user", JSON.stringify(updatedUser));

    clearCart();
    navigate("/order-success");
  };

  return (
    <section className="checkout-page">
      <h2>Checkout</h2>

      <div className="checkout-card">
        <h4>Delivery Details</h4>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>

        {/* 📱 PHONE INPUT */}
        {!phoneSaved && (
          <>
            <label><b>Phone Number</b></label>
            <input className="auth-card input"
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className="checkout-btn" onClick={savePhoneNumber} disabled={loading}>
              {loading ? "Saving..." : "Save Phone"}
            </button>
            <hr />
          </>
        )}

        {phoneSaved && (
          <p><b>Phone:</b> {phone}</p>
        )}

        <h4>Order Summary</h4>

        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <span>{item.name} × {item.qty}</span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}

        <hr />

        <h3>Total: ₹{totalAmount.toFixed(2)}</h3>

        <button
          className="checkout-btn"
          onClick={placeOrder}
          disabled={!phoneSaved}
        >
          Place Order
        </button>
      </div>
    </section>
  );
}
