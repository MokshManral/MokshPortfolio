import './styles.css'
import { projects, skills, timeline } from './data';
import { useEffect, useState, useRef } from 'react';

export default function Portfolio() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [barsOn, setBarsOn] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (ringRef.current) { ringRef.current.style.left = e.clientX + "px"; ringRef.current.style.top = e.clientY + "px"; }
      if (dotRef.current) { dotRef.current.style.left = e.clientX + "px"; dotRef.current.style.top = e.clientY + "px"; }
    };
    const over = (e) => {
      if (e.target.closest("a, button, .work-item")) ringRef.current?.classList.add("hovering");
      else ringRef.current?.classList.remove("hovering");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setBarsOn(true); }, { threshold: 0.2 });
    if (skillsRef.current) obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <div className="cursor-ring" ref={ringRef} />
      <div className="cursor-dot" ref={dotRef} />

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

      <main>
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

        <div className="shell">
          <section id="work">
            <div className="sec-head reveal">
              <span className="sec-num">01</span>
              <span className="sec-label">Selected Work</span>
              <span className="sec-line" />
            </div>
            <div className="work-list">
              {projects.map((p, i) => (
                <div className="work-item reveal" key={p.title}>
                  <div>
                    <div className="work-meta">
                      <span className="work-idx">0{i + 1}</span>
                      <span className="work-tag">{p.tag}</span>
                    </div>
                    <div className="work-title">{p.title}</div>
                    <div className="work-desc">{p.desc}</div>
                    <div className="work-stack">{p.stack.map(s => <span className="pill" key={s}>{s}</span>)}</div>
                  </div>
                  <div className="work-right">
                    <span className="work-year">{p.year}</span>
                    <div className="work-arrow">↗</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="shell">
          <section id="skills" ref={skillsRef}>
            <div className="sec-head reveal">
              <span className="sec-num">02</span>
              <span className="sec-label">Expertise</span>
              <span className="sec-line" />
            </div>
            <div className="skills-grid reveal">
              {skills.map(g => (
                <div className="skill-block" key={g.cat}>
                  <div className="skill-cat">{g.cat}</div>
                  <div className="skill-list">
                    {g.items.map(([name, pct]) => (
                      <div className="skill-row" key={name}>
                        <span className="skill-name">{name}</span>
                        <div className="skill-bar-track">
                          <div className="skill-bar-fill" style={{ width: barsOn ? `${pct}%` : "0%" }} />
                        </div>
                        <span className="skill-pct">{pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="shell">
          <section id="about">
            <div className="sec-head reveal">
              <span className="sec-num">03</span>
              <span className="sec-label">About</span>
              <span className="sec-line" />
            </div>
            <div className="about-grid">
              <div className="about-text reveal">
                <p>I'm <strong>Moksh Singh</strong>, a frontend developer obsessed with building clean, high-performance interfaces. I bridge the gap between design and engineering — shaping ideas into seamless digital experiences.</p>

                <p>I focus on <strong>scalable systems</strong> and thoughtful details — from component architecture and accessibility to the micro-interactions that bring interfaces to life.</p>

                <p>When I’m not coding, I’m experimenting with creative visuals, exploring new tools, and leveling up my craft.</p>
                <div className="avail-pill"><span className="avail-dot" />Open to freelance</div>
              </div>
              <div className="reveal">
                <div className="timeline">
                  {timeline.map(t => (
                    <div className="tl-item" key={t.year}>
                      <span className="tl-year">{t.year}</span>
                      <div>
                        <div className="tl-role">{t.role}</div>
                        <div className="tl-co">{t.co}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="shell">
          <section id="contact">
            <div className="sec-head reveal">
              <span className="sec-num">04</span>
              <span className="sec-label">Contact</span>
              <span className="sec-line" />
            </div>
            <div className="contact-card reveal">
              <div className="contact-inner">
                <h2 className="contact-heading">Let's build<br /><span className="grad">great</span> things<br /><em>together.</em></h2>
                <div className="contact-links">
                  {[
                    ["✉", "mokshmanral628@gmail.com", "mailto:mokshmanral628gmail.com"],
                    ["↗", "github.com/MokshManral", "https://github.com/MokshManral"],
                    ["↗", "linkedin.com/in/mokshsingh", "https://www.linkedin.com/in/mokshsingh/"],
                  ].map(([icon, label, href]) => (
                    <a className="contact-link" href={href} key={label} target="_blank" rel="noreferrer">
                      {label}<span className="icon">{icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="shell">
          <footer>
            <span className="foot-l">© {new Date().getFullYear()} Moksh Singh</span>
            <span className="foot-r">Crafted with <span>♥</span> & too much tea</span>
          </footer>
        </div>
      </main>
    </>
  );
}