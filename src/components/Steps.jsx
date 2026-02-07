"use client";

import { useReveal } from "../lib/useReveal";
import styles from "./Steps.module.scss";
import SectionTitle from "./ui/SectionTitle";
import { siteData } from "../lib/data";

export default function Steps() {
  const [ref, isRevealed] = useReveal();

  return (
    <section className={styles.steps}>
      <div className={styles.container}>
        <SectionTitle
          subtitle="Cómo trabajamos"
          title="Simplificamos tu gestión contable en tres pasos"
          description="Un proceso transparente y eficiente para que puedas enfocarte en hacer crecer tu negocio."
        />

        <div
          ref={ref}
          className={`${styles.stepsGrid} ${styles.reveal} ${
            isRevealed ? styles.revealed : ""
          }`}
        >
          {(siteData.howItWorks || []).map((step, index) => (
            <article
              key={step.step}
              className={`${styles.stepCard} ${styles.staggerItem}`}
              style={{ "--stagger-delay": index }}
              aria-label={`Paso ${step.step}: ${step.title}`}
            >
              <div className={styles.stepTop}>
                <div className={styles.stepNumber}>{step.step}</div>
                <span className={styles.stepIcon} aria-hidden="true">
                  {step.icon}
                </span>
              </div>

              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
