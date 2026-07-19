import React from 'react'

const Header = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <>
      <nav>
        <div className="nav-inner">
          <span className="nav-logo"><span className="nav-logo-dot" />Moksh Singh</span>
          <ul className="nav-links">
            {["work", "skills", "about", "contact"].map(s => (
              <li key={s}><a href={`#${s}`} onClick={e => { e.preventDefault(); go(s); }}>{s}</a></li>
            ))}
          </ul>
          <span className="nav-badge">Available for work</span>
        </div>
      </nav>
    </>
  )
}

export default Header;
