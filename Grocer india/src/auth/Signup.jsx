import { useState } from "react";
import { useAuth } from "../starpage/context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./AuthUI.css";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async () => {
    const res = await signup(form);
    if (res?.error) setError(res.error);
    else navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Join Grocer India</p>

        <input
          placeholder="Full name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <button className="auth-btn" onClick={handleSignup}>
          Sign Up
        </button>

        {error && <p className="auth-error">{error}</p>}

        <div className="auth-links">
          <span></span>
          <a href="/login">Already have an account?</a>
        </div>
      </div>
    </div>
  );
}
