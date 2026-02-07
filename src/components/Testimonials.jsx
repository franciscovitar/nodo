"use client";

import { useReveal } from "../lib/useReveal";
import styles from "./Testimonials.module.scss";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { siteData } from "../lib/data";

export default function Testimonials() {
  const [ref, isRevealed] = useReveal();

  const whatsappLink = `https://wa.me/${siteData.company.phone}?text=${encodeURIComponent(
    "Hola, me gustaría conocer más referencias de clientes similares a mi empresa",
  )}`;

  const getInitials = (name) =>
    name
      .split(" ")
      .map((w) => w.charAt(0))
      .join("")
      .toUpperCase();

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        className={`${styles.star} ${index < rating ? styles.starOn : styles.starOff}`}
        aria-hidden="true"
      >
        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
      </svg>
    ));

  return (
    <section id="testimonios" className={styles.testimonials}>
      <div className={styles.container}>
        <SectionTitle
          subtitle="Testimonios"
          title="Empresas que confiaron en nosotros para crecer"
          description="Más de 500 empresas ya transformaron su gestión contable con NODO."
        />

        <div
          ref={ref}
          className={`${styles.testimonialsGrid} ${styles.reveal} ${
            isRevealed ? styles.revealed : ""
          }`}
        >
          {(siteData.testimonials || []).map((t, index) => (
            <article
              key={t.id}
              className={`${styles.testimonialCard} ${styles.staggerItem}`}
              style={{ "--stagger-delay": index }}
              aria-label={`Testimonio de ${t.name}`}
            >
              <div className={styles.quoteIcon} aria-hidden="true">
                ❝
              </div>

              <p className={styles.testimonialContent}>{t.content}</p>

              <footer className={styles.testimonialFooter}>
                <div className={styles.testimonialAvatar} aria-hidden="true">
                  {getInitials(t.name)}
                </div>

                <div className={styles.testimonialInfo}>
                  <div className={styles.testimonialName}>{t.name}</div>
                  <div className={styles.testimonialCompany}>{t.company}</div>

                  <div className={styles.testimonialMeta}>
                    <span>{t.industry}</span>
                    <span className={styles.dot}>•</span>
                    <span>{t.size}</span>
                  </div>

                  <div
                    className={styles.testimonialRating}
                    aria-label={`Rating: ${t.rating} de 5`}
                  >
                    {renderStars(t.rating)}
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div
          className={`${styles.cta} ${styles.reveal} ${
            isRevealed ? styles.revealed : ""
          }`}
        >
          <h3 className={styles.ctaTitle}>
            ¿Listo para ser la próxima historia de éxito?
          </h3>
          <p className={styles.ctaDescription}>
            Sumate a empresas que ordenaron su gestión y aceleraron su
            crecimiento con NODO.
          </p>
          <Button variant="primary" size="large" href={whatsappLink} icon="🚀">
            Empezar mi transformación
          </Button>
        </div>
      </div>
    </section>
  );
}
