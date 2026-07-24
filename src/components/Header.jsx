import React from "react";
import { headerData } from "../data";

const Header = () => {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav>
      <div className="nav-inner">
        <span className="nav-logo">
          <span className="nav-logo-dot" />
          {headerData.logo}
        </span>

        <ul className="nav-links">
          {headerData.links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(id);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <span className="nav-badge">{headerData.badge}</span>
      </div>
    </nav>
  );
};

export default Header;