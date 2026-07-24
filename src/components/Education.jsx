import React from 'react'
import { timeline } from '../data'

const Education = () => {
  return (
    <div className="reveal">
      <div className="timeline">
        {timeline.map(t => (
          <div className="tl-item" key={t.year}>
            <span className="tl-year">{t.year}</span>
            <div>
              <div className="tl-role">{t.role}</div>
              <div className="tl-co">{t.co}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
