import React from "react";
import "../styles.css";
import { funFacts } from "../data";

const FunFacts = () => {
  return (
    <div className="shell">
      <section id="facts">
          <div className="sec-head reveal">
            <span className="sec-label">Fun Facts</span>
          </div>

          <div className="facts reveal">
            {funFacts.map(({ icon, text }) => (
              <div className="fact reveal" key={text}>
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
};

export default FunFacts;