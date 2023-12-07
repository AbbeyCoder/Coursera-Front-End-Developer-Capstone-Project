import { useState } from "react";
import Navigation from "./Navigation";
import HamburgerIcon from "../assets/hamburger.png";
import CloseIcon from "../assets/close.png";
import "./Navbar.css"; // Create a CSS file for styling

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Change the function name for better readability
  function toggleNavbar() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
      <div className="burger-container">
        <img
          src={require("../assets/nav-logo.png")}
          alt="Little Lemon logo"
          className="nav-logo"
        />
        {/* Use a more descriptive name for the button function */}
        <button className="toggle-button" onClick={toggleNavbar}>
          <img
            src={navbarOpen ? CloseIcon : HamburgerIcon}
            alt="Toggle Navigation"
          />
        </button>
      </div>
      {/* Use a more descriptive prop name for better understanding */}
      <Navigation deviceType="desktop" />
      {navbarOpen && <Navigation deviceType="mobile" />}{" "}
      {/* Simplify the condition */}
    </nav>
  );
}
