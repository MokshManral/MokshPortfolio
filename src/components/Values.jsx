import React from 'react'
import { values } from '../data'

const Values = () => {
  return (
    <div className="shell">
      <section id="values">
        <div className="sec-head">
          <span className='sec-label reveal'>My values</span>
        </div>
        <div className="listgrid reveal">
          {values.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Values
