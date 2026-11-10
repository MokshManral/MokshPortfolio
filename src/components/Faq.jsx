import React from "react";
import "../styles.css";
import { faqData } from "../data";

const Faq = () => {
  return (
    <div className="shell">
      <section id="faq">
          <div className="sec-head">
            <span className="sec-label reveal">FAQs</span>
          </div>

          <div className="reveal">
            {faqData.map((faq) => (
              <details
                className="faq-item"
                key={faq.question}
              >
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
      </section>
    </div>
  );
};

export default Faq;