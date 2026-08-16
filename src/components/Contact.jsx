import React from "react";
import "../styles.css";
import { contactData } from "../data";

const Contact = () => {
  return (
    <div className="shell">
      <section id="contact">
        <div className="sec-head reveal">
          <span className="sec-label">{contactData.title}</span>
          <span className="sec-line" />
        </div>

        <div className="contact-card reveal">
          <div className="contact-inner">
            <h2 className="contact-heading">
              {contactData.heading.line1}
              <br />
              <span className="grad">{contactData.heading.highlight}</span>{" "}
              {contactData.heading.line2}
              <br />
              <em>{contactData.heading.line3}</em>
            </h2>

            <div className="contact-links">
              {contactData.links.map(({ icon, label, href }) => (
                <a
                  key={label}
                  className="contact-link"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {React.createElement(icon, { className: "icon" })}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
