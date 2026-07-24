import React, { useRef, useState, useEffect } from 'react'
import { skills } from '../data'


const Expertise = () => {
  const skillsRef = useRef(null);
  const [barsOn, setBarsOn] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setBarsOn(true); }, { threshold: 0.2 });
    if (skillsRef.current) obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="shell">
        <section id="skills" ref={skillsRef}>
          <div className="sec-head reveal">
            <span className="sec-label">Expertise</span>
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
    </>
  )
}

export default Expertise;
