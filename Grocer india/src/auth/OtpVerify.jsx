import { useState } from "react";
import { useAuth } from "../starpage/context/AuthContext";

export default function OtpVerify({ phone }) {
  const { verifyOtp, loading, error } = useAuth();
  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    const success = await verifyOtp(phone, otp);
    if (success) alert("Login successful 🎉");
  };

  return (
    <div>
      <input
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerify} disabled={loading}>
        Verify OTP
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
