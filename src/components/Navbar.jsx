
import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-container-div1">
        <img src="/logo.webp" alt="Company Logo - Knowledge Park" />
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          ☰
        </button>
      </div>

      <div className={`nav-container-div2 ${menuOpen ? 'active' : ''}`} id="navlink"role="navigation" aria-label="Main navigation"
      onClick={() => setMenuOpen(false)}>
        <a href="#home" aria-label="Go to Home section">Home</a>
        <a href="#overview" aria-label="Go to Overview section">Overview</a>
        <a href="#amenities" aria-label="Go to Amenities section">Amenities</a>
        <a href="#price" aria-label="Go to Price section">Price</a>
        <a href="#highlights" aria-label="Go to Highlights section">Highlights</a>
        <a href="#floor-plans" aria-label="Go to Floor Plans section">Floor Plans</a>
        <a href="#location" aria-label="Go to Location section">Location</a>
        <a href="#contact" aria-label="Go to Contact section">Contact</a>
        <a href="tel:+918800327357" aria-label="Call for inquiries">+91 8800327357</a>
      </div>
    </nav>
  );
};

