import React from 'react'

const Hero = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <>
      <div className="hero-wrap">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="shell">
          <div className="hero" id="home">
            <div className="hero-eyebrow"><span className="eyebrow-line" />Frontend Developer · Gurugram</div>
            <h1 className="hero-name">
              Building<br />
              <span className="l2">Interfaces</span><br />
              <span className="grad">Worth Feeling</span>
            </h1>
            <p className="hero-desc">I craft pixel-perfect, performant web experiences — from design systems that scale to dashboards that delight.</p>
            <div className="hero-actions">
              <a href="#work" className="btn-primary" onClick={e => { e.preventDefault(); go("work"); }}>View my work →</a>
              <a href="#contact" className="btn-ghost" onClick={e => { e.preventDefault(); go("contact"); }}>Get in touch ↗</a>
            </div>
            <div className="hero-stats">
              {[["0", "Years of exp."], ["0+", "Projects shipped"], ["0", "GitHub stars"]].map(([n, l]) => (
                <div key={l}><span className="stat-num">{n}</span><div className="stat-label">{l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
