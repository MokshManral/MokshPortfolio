import React from "react";
import { projects } from "../data";

const Works = () => {
  return (
    <div className="shell">
      <section id="work">
        <div className="sec-head reveal">
          <span className="sec-label">Selected Work</span>
        </div>

        <div className="work-list reveal">
          {projects.map((p, i) => (
            <article className="work-item reveal" key={p.title}>
              <div className="work-card-top">
                <div className="work-meta">
                  <span className="work-idx">0{i + 1}</span>
                  <span className="work-tag">{p.tag}</span>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="work-link"
                  aria-label={`Open ${p.title} project`}
                >
                  View project <span>↗</span>
                </a>
              </div>

              <div className="work-card-body">
                <div className="work-copy">
                  <div className="work-title-row">
                    <div className="work-title">{p.title}</div>
                    <span className="work-dot" aria-hidden="true" />
                  </div>
                  <div className="work-desc">{p.desc}</div>
                  <div className="work-stack">
                    {p.stack.map((s) => (
                      <span className="pill" key={s}>{s}</span>
                    ))}
                  </div>
                </div>

                <div className="work-right">
                  <span className="work-year">{p.year}</span>
                  <span className="work-status">Built</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Works;
