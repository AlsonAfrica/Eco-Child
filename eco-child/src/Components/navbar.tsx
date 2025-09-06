import type React from "react"
import "../Styles/navbar.css"
import logo from "../assets/logo.png"

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-icon">
           <img src={logo}/>
          </div>
        </div>

          {/* Theme Toggle */}
        <div className="navbar-menu">
          <a href="#home" className="navbar-link">
            Home
          </a>

          <a href="#about" className="navbar-link">
            About Us
          </a>

          <a href="#features" className="navbar-link">
            Features
          </a>

          <a href="#join" className="navbar-link">
            Join Us
          </a>

          {/* <button className="theme-toggle" aria-label="Toggle theme">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              <path
                d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button> */}

        </div>    
      </div>
    </nav>
  )
}

export default Navbar
