import React from "react";
import { useState } from "react";
import { headerData } from "../data";

const Header = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav>
      <div className="nav-inner">
        <span className="nav-logo">
          <span className="nav-logo-dot" />
          {headerData.logo}
        </span>

        <ul id="primary-navigation" className={`nav-links${menuOpen ? " is-open" : ""}`}>
          {headerData.links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  go(id);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button
            type="button"
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === "dark" ? "☀" : "☾"}
            </span>
          </button>
          <span className="nav-badge">{headerData.badge}</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;