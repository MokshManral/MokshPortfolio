import React from "react";
import { journey } from "../data";

export default function Timeline() {
  return (
    <div className="shell">
      <section id="journey">
          <div className="sec-head reveal">
            <span className="sec-label">My journey</span>
          </div>
          <ul className="gitlog reveal">
            {
              journey.map(([hash, msg]) => (
                <li key={hash}>
                  <span className="commit-hash">{hash}</span>
                  <span className="commit-msg">{msg}</span>
                </li>
              ))}
          </ul>
      </section>
    </div>

  );
}
