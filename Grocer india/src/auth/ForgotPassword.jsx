import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthUI.css";

const API_URL = "https://696353f42d146d9f58d32f7b.mockapi.io/users";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    setError("");

    // 1️⃣ Check user exists
    const res = await fetch(`${API_URL}?email=${email}`);
    const data = await res.json();

    if (!data.length) {
      setError("No account found with this email");
      return;
    }

    // 2️⃣ Send Email OTP
    await fetch("http://localhost:5000/send-email-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    // 3️⃣ Go to reset page
    navigate("/reset-password", {
      state: { email, userId: data[0].id },
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Forgot Password</h2>
        <p className="auth-subtitle">
          Enter your registered email
        </p>

        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="auth-btn" onClick={handleSendOtp}>
          Send OTP
        </button>

        {error && <p className="auth-error">{error}</p>}
      </div>
    </div>
  );
}
