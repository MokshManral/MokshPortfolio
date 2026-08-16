import React from "react";
import "../styles.css";
import { stack } from "../data";

function TechStack() {
  return (
    <div className="shell">
      <section id="stack">
          <div className="sec-head reveal">
            <span className='sec-label'>Tech Stack</span>
            <span className="sec-line"></span>
          </div>
          <div className="stack-grid reveal">
            {stack.map((col, i) => (
              <div
                className="stack-col reveal"
                key={col.heading}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="stack-head">{col.heading}</span>

                <div className="stack-pills">
                  {col.pills.map(({ name, icon }) => (
                    <span className="pill" key={name}>
                      {React.createElement(icon, { className: "pill-icon" })}
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
}

export default TechStack;
