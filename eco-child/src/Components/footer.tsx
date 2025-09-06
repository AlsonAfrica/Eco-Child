import type React from "react"
import "../Styles/footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-icon">🌱</div>
            <h3>Urban Environmental Cleanliness</h3>
          </div>
          <p className="footer-description">
            Empowering children to become eco-warriors through technology, fun games, and educational content.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <span>📘</span>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <span>🐦</span>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <span>📷</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="#features">Our Features</a>
            </li>
            <li>
              <a href="#mission">Join Our Mission</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li>
              <a href="#games">Eco Games</a>
            </li>
            <li>
              <a href="#garden">Virtual Garden</a>
            </li>
            <li>
              <a href="#badges">Eco Badges</a>
            </li>
            <li>
              <a href="#dashboard">Parent Dashboard</a>
            </li>
          </ul>
        </div>

        {/* Get The App */}
        <div className="footer-section">
          {/* <h4>Get The App</h4> */}
          {/* <div className="app-links">
            <a href="#" className="app-link">
              <span className="app-icon">💻</span>
              <span>Web App</span>
            </a>
            <a href="#" className="app-link">
              <span className="app-icon">📱</span>
              <span>Mobile App</span>
            </a>
          </div> */}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 Urban Environmental Cleanliness. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>

        {/* Floating Action Button */}
        {/* <div className="floating-action-btn">
          <span>🌱</span>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
