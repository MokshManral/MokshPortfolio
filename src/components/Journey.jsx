import React from "react";
import { journey } from "../data";

export default function Timeline() {
  return (
    <div className="shell">
      <section id="journey">
          <span className="sec-label reveal">My journey</span>
          <div className="sec-head reveal">
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
