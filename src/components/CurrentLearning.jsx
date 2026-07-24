import React from "react";
import "../styles.css";
import { currentLearning } from "../data";

const CurrentLearning = () => {
  return (
    <div className="shell">
      <section id="currently">
        <div className="sec-head reveal">
          <span className="sec-label">Currently Focusing On...</span>
          <span className="sec-line" />
        </div>
        <div className="listgrid">
          {currentLearning.map(({ icon, title }) => (
            <div className="reveal" key={title}>
              <span>{icon}</span> {title}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CurrentLearning;