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
          {currentLearning.map((title) => (
            <div className="reveal" key={title}>
              {title}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CurrentLearning;