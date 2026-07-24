import React from "react";
import "../styles.css";
import { futureGoals } from "../data";

const FutureGoals = () => {
  return (
    <div className="shell">
      <section id="goals">
          <div className="sec-head reveal">
            <span className="sec-label">Future Goals</span>
          </div>

          <div className="listgrid reveal">
            {futureGoals.map(({ icon, title }) => (
              <div className="goal-card reveal" key={title}>
                <span>{icon}</span>
                <span>{title}</span>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
};

export default FutureGoals;