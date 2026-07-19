import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="shell">
        <section id="contact">
          <div className="sec-head reveal">
            <span className="sec-num">04</span>
            <span className="sec-label">Contact</span>
            <span className="sec-line" />
          </div>
          <div className="contact-card reveal">
            <div className="contact-inner">
              <h2 className="contact-heading">Let's build<br /><span className="grad">great</span> things<br /><em>together.</em></h2>
              <div className="contact-links">
                {[
                  ["✉", "mokshmanral628@gmail.com", "mailto:mokshmanral628gmail.com"],
                  ["↗", "github.com/MokshManral", "https://github.com/MokshManral"],
                  ["↗", "linkedin.com/in/mokshsingh", "https://www.linkedin.com/in/mokshsingh/"],
                ].map(([icon, label, href]) => (
                  <a className="contact-link" href={href} key={label} target="_blank" rel="noreferrer">
                    {label}<span className="icon">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact;
