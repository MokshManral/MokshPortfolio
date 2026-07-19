import React from 'react'
import { timeline } from '../data'

const About = () => {
  return (
    <>
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
    </>
  )
}

export default About;