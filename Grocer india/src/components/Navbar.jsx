import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../starpage/context/useCart";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <header className="apple-navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          🛒 <span>Grocer India</span>
        </div>

        {/* Desktop Links */}
        <nav className={`nav-links ${showSearch ? "hide" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          {/* Search */}
          <span onClick={() => setShowSearch(!showSearch)}>
            {showSearch ? "❌" : "🔍"}
          </span>

          {/* Cart */}
          <Link to="/cart" className="cart-icon">
            🛍️
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </Link>

          {/* Burger Menu (Mobile) */}
          <span
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </span>
        </div>
      </div>

      {/* Search Box */}
      {showSearch && (
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search for groceries..."
            autoFocus
          />
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/products">Shop</Link>
          <Link onClick={() => setMenuOpen(false)} to="/categories">Categories</Link>
          <Link onClick={() => setMenuOpen(false)} to="/offers">Offers</Link>
          <Link onClick={() => setMenuOpen(false)} to="/cart">Cart</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
        </div>
      )}
    </header>
  );
}
