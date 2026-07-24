import React from 'react'
import { achievements } from '../../data'

const Achievements = () => {
  return (
    <div className="shell">
      <section id="work">
        <div className="sec-head reveal">
          <span className="sec-label">Achievements</span>
          <span className="sec-line" />
        </div>
        <div className="work-list reveal">
        <div className="listgrid">
          {achievements.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
        </div>


      </section>
    </div>

  )
}

export default Achievements
