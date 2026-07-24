import "../styles.css";
import { stack } from "../data";

function TechStack() {
  return (
    <div className="shell">
      <section id="values">
          <div className="sec-head">
            <span className='sec-label'>Tech Stack</span>
            <span className="sec-line"></span>
          </div>
          <div className="stack-grid reveal">
            {stack.map((col, i) => (
              <div
                className="stack-col"
                key={col.heading}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="stack-head">{col.heading}</span>

                <div className="stack-pills">
                  {col.pills.map(({ name, icon: Icon }) => (
                    <span className="pill" key={name}>
                      <Icon className="pill-icon" />
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