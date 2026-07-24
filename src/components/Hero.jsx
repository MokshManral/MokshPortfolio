import React from "react";
import "../styles.css";
import { heroData } from "../data";

const Hero = () => {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <div className="hero-wrap">
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />

      <div className="shell">
        <section className="hero" id="home">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            {heroData.location}
          </div>

          <h1 className="hero-name">
            {heroData.title.line1}
            <br />
            <span className="l2">{heroData.title.line2}</span>
            <br />
            <span className="grad">{heroData.title.highlight}</span>
          </h1>

          <p className="hero-desc">{heroData.description}</p>

          <div className="hero-actions">
            {heroData.buttons.map(({ label, target, className }) => (
              <a
                key={target}
                href={`#${target}`}
                className={className}
                onClick={(e) => {
                  e.preventDefault();
                  go(target);
                }}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hero-stats">
            {heroData.stats.map(({ value, label }) => (
              <div key={label}>
                <span className="stat-num">{value}</span>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;