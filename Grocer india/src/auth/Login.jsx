import { useState } from "react";
import { useAuth } from "../starpage/context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./AuthUI.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const res = await login(email, password);
    if (res?.error) setError(res.error);
    else navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        <p className="auth-subtitle">Welcome back</p>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <button className="auth-btn" onClick={handleLogin}>
          Login
        </button>

        {error && <p className="auth-error">{error}</p>}

        <div className="auth-links">
          <a href="/forgot-password">Forgot password?</a>
          <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
}
