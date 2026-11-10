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
            {futureGoals.map((title) => (
              <div className="goal-card reveal" key={title}>
                <span>{title}</span>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
};

export default FutureGoals;