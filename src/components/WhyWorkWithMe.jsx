import React from "react";
import "../styles.css";
import { whyWorkWithMe } from "../data";

const WhyWorkWithMe = () => {
  return (
    <div className="shell">
      <section id="why">
          <div className="sec-head">
            <span className="sec-label">Why Work With Me</span>
          </div>

          <div className="listgrid reveal">
            {whyWorkWithMe.points.map((point) => (
              <div className="reveal" key={point}>
                {point}
              </div>
            ))}
          </div>

          <p className="quote reveal" style={{ marginTop: 34 }}>
            "{whyWorkWithMe.quote}"
          </p>
      </section>
    </div>
  );
};

export default WhyWorkWithMe;