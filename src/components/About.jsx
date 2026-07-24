import React from 'react'
// import Timeline from './Timeline';
import Education from './Education';

const About = () => {
  return (
    <>
      <div className="shell">
        <section id="about">
          <div className="sec-head reveal">
            <span className="sec-label">Who am I ?</span>
            <span className="sec-line" />
          </div>
          <div className="about-grid">
            <div className="about-text reveal">
              <p>
                I'm <strong>Moksh Manral</strong>, a Computer Science undergraduate and
                full-stack developer passionate about building scalable, user-focused web
                applications. I enjoy transforming ideas into fast, responsive, and
                intuitive digital experiences using modern technologies.
              </p>

              <p>
                My primary stack includes <strong>React, JavaScript, FastAPI, Python, and
                  PostgreSQL</strong>. Alongside web development, I'm actively strengthening
                my skills in data engineering, backend architecture, and data structures &
                algorithms to become a well-rounded software engineer.
              </p>

              <p>
                Beyond coding, I enjoy solving challenging problems on LeetCode, exploring
                new technologies, contributing to personal projects, and continuously
                improving my development workflow. I'm always eager to learn, collaborate,
                and build software that creates real impact.
              </p>
              <div className="avail-pill"><span className="avail-dot" />Open to freelance</div>
            </div>
            <Education/>
          </div>
        </section>
      </div>
    </>
  )
}

export default About;