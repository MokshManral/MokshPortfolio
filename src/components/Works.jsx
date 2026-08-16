import React from 'react'
import { projects } from '../data'

const Works = () => {
  return (
    <>
        <div className="shell">
          <section id="work">
            <div className="sec-head reveal">
              <span className="sec-label">Selected Work</span>
            </div>
            <div className="work-list reveal">
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
                    <a href={p.link} target="_blank" rel="noreferrer" className="work-arrow" aria-label={`Open ${p.title} project`}>↗</a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
    </>
  )
}

export default Works;
