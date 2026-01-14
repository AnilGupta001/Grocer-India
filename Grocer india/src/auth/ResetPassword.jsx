import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AuthUI.css";

const API_URL = "https://696353f42d146d9f58d32f7b.mockapi.io/users";

export default function ResetPassword() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    setError("");

    // 1️⃣ Verify Email OTP
    const otpRes = await fetch(
      "http://localhost:5000/verify-email-otp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: state.email,
          otp,
        }),
      }
    );

    if (!otpRes.ok) {
      setError("Invalid or expired OTP");
      return;
    }

    // 2️⃣ Update password in MockAPI
    await fetch(`${API_URL}/${state.userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    // 3️⃣ Redirect to login
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Reset Password</h2>
        <p className="auth-subtitle">
          Enter OTP and new password
        </p>

        <input
          placeholder="Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
        />

        <input
          type="password"
          placeholder="New password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-btn" onClick={handleResetPassword}>
          Reset Password
        </button>

        {error && <p className="auth-error">{error}</p>}
      </div>
    </div>
  );
}
