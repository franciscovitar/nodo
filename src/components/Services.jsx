"use client";

import { useReveal } from "../lib/useReveal";
import styles from "./Services.module.scss";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { siteData } from "../lib/data";

export default function Services() {
  const [ref, isRevealed] = useReveal();

  const whatsappLink = `https://wa.me/${siteData.company.phone}?text=${encodeURIComponent(
    "Hola, me interesa saber más sobre sus servicios contables",
  )}`;

  return (
    <section id="servicios" className={styles.services}>
      <div className={styles.container}>
        <SectionTitle
          subtitle="Nuestros servicios"
          title="Todo lo que necesitás para hacer crecer tu empresa"
          description="Soluciones contables y fiscales pensadas para acompañar tu crecimiento, desde startups hasta empresas consolidadas."
        />

        <div
          ref={ref}
          className={`${styles.servicesGrid} ${styles.reveal} ${
            isRevealed ? styles.revealed : ""
          }`}
        >
          {(siteData.services || []).map((service, index) => (
            <article
              key={service.id}
              className={`${styles.serviceCard} ${styles.staggerItem}`}
              style={{ "--stagger-delay": index }}
              data-service={service.id}
              aria-label={`Servicio: ${service.title}`}
            >
              <header className={styles.serviceHeader}>
                <div className={styles.serviceIcon} aria-hidden="true">
                  <span>{service.icon}</span>
                </div>

                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                </div>
              </header>

              <ul className={styles.featuresList} aria-label="Características">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* <div
          className={`${styles.cta} ${styles.reveal} ${
            isRevealed ? styles.revealed : ""
          }`}
        >
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitás una solución personalizada?
            </h3>
            <p className={styles.ctaDescription}>
              Cada empresa es única. Conversemos sobre tu situación y diseñemos
              la estrategia ideal.
            </p>
            <Button
              variant="primary"
              size="large"
              href={whatsappLink}
              className={styles.ctaButton}
              icon="💬"
            >
              Consultá tu caso
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
