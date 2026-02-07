"use client";
import { useState } from "react";
import { useReveal } from "../lib/useReveal";
import styles from "./FAQ.module.scss";
import SectionTitle from "./ui/SectionTitle";
import { siteData } from "../lib/data";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, isRevealed] = useReveal();

  const toggleQuestion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <div className={styles.content}>
          <SectionTitle
            subtitle="Preguntas frecuentes"
            title="Resolvemos tus dudas"
            description="Las consultas más comunes de nuestros clientes. Si no encontrás lo que buscás, contactanos directamente."
          />

          <div
            ref={ref}
            className={`${styles.faqList} ${styles.reveal} ${
              isRevealed ? styles.revealed : ""
            }`}
          >
            {siteData.faq.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={item.id}
                  className={`${styles.faqItem} ${isOpen ? styles.active : ""} ${
                    styles.staggerItem
                  }`}
                  style={{ "--stagger-delay": index }}
                >
                  <button
                    id={`faq-question-${item.id}`}
                    className={styles.faqQuestion}
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    type="button"
                  >
                    <span className={styles.questionText}>{item.question}</span>

                    <span
                      className={`${styles.faqIcon} ${isOpen ? styles.iconOpen : ""}`}
                      aria-hidden="true"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 18l6-6-6-6"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${item.id}`}
                    className={`${styles.faqAnswer} ${isOpen ? styles.open : ""}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                  >
                    <div className={styles.faqAnswerInner}>
                      <div className={styles.faqAnswerContent}>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
