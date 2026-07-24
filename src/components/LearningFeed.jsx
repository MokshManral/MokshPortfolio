import React from "react";
import "../styles.css";
import { learningFeed } from "../data";

const LearningFeed = () => {
  return (
    <div className="shell">
      <section id="learning">
        <div className="sec-head reveal">
          <span className="sec-label">Learning in Public</span>
        </div>

        <div className="eyebrow reveal">
          <span className="status">{learningFeed.month}</span>
        </div>

        <div className="feed reveal">
          <div className="feed-head">
            <span>
              {`$ git log --author=${learningFeed.author} --since="${learningFeed.month}"`}
            </span>

            <span>{learningFeed.commits} commits</span>
          </div>

          <ul>
            {learningFeed.updates.map((update) => (
              <li key={update}>{update}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LearningFeed;