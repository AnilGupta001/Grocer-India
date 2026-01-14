export default function Footer() {
  return (
    <footer className="bb-footer">
      {/* Divider */}
      <div className="bb-dotted-line"></div>

      {/* Content */}
      <div className="bb-footer-grid">
        {/* Popular Categories */}
        <div className="bb-footer-section">
          <h4>Popular Categories</h4>

          <div className="bb-list-columns">
            <ul>
              <li>Sunflower Oils</li>
              <li>Milk</li>
              <li>Organic F&V</li>
              <li>Floor Cleaners</li>
              <li>Frozen Veg Food</li>
            </ul>

            <ul>
              <li>Wheat Atta</li>
              <li>Health Drinks</li>
              <li>Namkeen</li>
              <li>Other Juices</li>
              <li>Diapers & Wipes</li>
            </ul>

            <ul>
              <li>Ghee</li>
              <li>Flakes</li>
              <li>Eggs</li>
              <li>Leafy Vegetables</li>
            </ul>
          </div>
        </div>

        {/* Popular Brands */}
        <div className="bb-footer-section">
          <h4>Popular Brands</h4>

          <div className="bb-list-columns">
            <ul>
              <li>Amul</li>
              <li>Red Bull</li>
              <li>Yummiez</li>
              <li>Britannia</li>
              <li>Haldiram's</li>
            </ul>

            <ul>
              <li>Nescafe</li>
              <li>elite cake</li>
              <li>Yera</li>
              <li>Wow! Momo</li>
              <li>Ferrero</li>
            </ul>

            <ul>
              <li>MTR</li>
              <li>Pediasure</li>
              <li>Yakult</li>
              <li>Fortune</li>
              <li>Lay's</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Show more */}
      <div className="bb-show-more">Show more +</div>

      {/* Copyright */}
     <div className="bb-footer-bottom">
  <div className="footer-bottom-content">
    {/* Logo */}
    <div className="footer-brand">
      <span className="footer-logo">🛒</span>
      <div>
        <strong>Grocer India Pvt. Ltd.</strong>
        <p className="footer-owner">Owned by Prakash Sahu</p>
         <p className="footer-owner">Contact Us 8827786439</p>
      </div>
      <div>
        
       
      </div>
    </div>

    {/* Location */}
    <div className="footer-location">
      📍 Deri Road, Chhatarpur, Madhya Pradesh,471001
    </div>

    {/* Copyright */}
    <div className="footer-copy">
      © 2025–2027 Grocer India. All rights reserved.
    </div>
  </div>
</div>

    </footer>
  );
}
