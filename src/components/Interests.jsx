import React from "react";
import "../styles.css";
import { interests } from "../data";

const Interests = () => {
  return (
    <div className="shell">
      <section id="interests">
          <div className="sec-head reveal">
            <span className="sec-label">Interests</span>
          </div>

          <div className="tag-row reveal">
            {interests.map((interest) => (
              <span className="tag reveal" key={interest}>
                {interest}
              </span>
            ))}
          </div>
      </section>
    </div>
  );
};

export default Interests;