"use client";

import { useReveal } from "../lib/useReveal";
import styles from "./Results.module.scss";
import SectionTitle from "./ui/SectionTitle";
import { siteData } from "../lib/data";

export default function Results() {
  const [ref, isRevealed] = useReveal();

  return (
    <section className={styles.results}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <SectionTitle
            subtitle="Resultados que respaldan"
            title="Impacto real en el crecimiento de nuestros clientes"
            description="Más de 3 años transformando la gestión contable de empresas como la tuya."
          />
        </div>

        <div
          ref={ref}
          className={`${styles.resultsGrid} ${styles.reveal} ${
            isRevealed ? styles.revealed : ""
          }`}
        >
          {(siteData.results || []).map((result, index) => (
            <article
              key={index}
              className={`${styles.resultCard} ${styles.staggerItem}`}
              style={{ "--stagger-delay": index }}
            >
              <div className={styles.resultIcon} aria-hidden="true">
                <span>{result.icon}</span>
              </div>

              <div className={styles.resultContent}>
                <div
                  className={`${styles.resultMetric} ${
                    isRevealed ? styles.animated : ""
                  }`}
                >
                  {result.metric}
                </div>
                <p className={styles.resultDescription}>{result.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
