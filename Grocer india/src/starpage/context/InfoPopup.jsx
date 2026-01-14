import { useEffect, useState } from "react";

export default function InfoPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("grocer_popup_seen");
    if (!seen) {
      setShow(true);
    }
  }, []);

  const closePopup = () => {
    setShow(false);
    localStorage.setItem("grocer_popup_seen", "true");
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="popup-close" onClick={closePopup}>
          ✕
        </button>

        <h2>🛒 Welcome to Grocer India</h2>

        <p className="popup-text">
          Grocer India is an <b>online grocery store</b> where you can order
          fresh fruits, vegetables, dairy products, and daily essentials
          delivered to your doorstep.
        </p>

        <div className="popup-owner">
          <p><b>Company Owner:</b> Prakash Sahu</p>
          <p><b>Contact:</b> 📞 8225070857</p>
        </div>

        <button className="popup-btn" onClick={closePopup}>
          Start Shopping
        </button>
      </div>
    </div>
  );
}
