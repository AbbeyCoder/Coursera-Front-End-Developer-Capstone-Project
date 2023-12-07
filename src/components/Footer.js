import { Link } from "react-router-dom";
import "./Footer.css"; // Import the CSS file for styling

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section img-footer">
          <img
            src={require("../assets/footer-logo.png")}
            alt="Little Lemon logo"
          />
        </div>
        <div className="footer-section contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a
                href={require("../assets/menuu.webp")}
                target="_blank"
                rel="noreferrer"
              >
                Menu
              </a>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/login">Sign-in</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section connect">
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <li>
              <a
                href="https://www.Twitter.com/abbeylemon/"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/abbeylemon/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.Tiktok.com/abbeylemon/"
                target="_blank"
                rel="noreferrer"
              >
                Tiktok
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/abbeylemon/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
