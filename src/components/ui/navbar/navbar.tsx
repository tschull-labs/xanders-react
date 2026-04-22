// import "./navbar.css";
import "../../../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <b>Xanders</b>
        </a>
        <div className="navbar-links">
          <a href="#" className="navbar-link">
            About Us
          </a>
          <a href="#" className="navbar-link">
            Project
          </a>
          <a href="#" className="navbar-link">
            Downloads
          </a>
          <a href="#" className="navbar-link">
            Help
          </a>
        </div>
        <button className="navbar-btn" onClick={() => navigate("/login")}>
          Login
        </button>
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#" className="mobile-link">
            Über uns
          </a>
          <a href="#" className="mobile-link">
            Projekte
          </a>
          <a href="#" className="mobile-link">
            Downloads
          </a>
          <a href="#" className="mobile-link">
            Hilfe
          </a>
          <button className="navbar-btn">Login</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
