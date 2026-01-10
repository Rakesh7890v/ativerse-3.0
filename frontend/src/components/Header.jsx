import { useState } from "react";
import "./Header.css";
import bg from '../assets/bg.webp'

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h2>AD</h2>
      </div>

      <nav className={`nav ${open ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#timeline" onClick={() => setOpen(false)}>Timeline</a></li>
          <li><a href="#prizes" onClick={() => setOpen(false)}>Prizes</a></li>
          <li><a href="#apply" onClick={() => setOpen(false)}>Register</a></li>
        </ul>
      </nav>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
