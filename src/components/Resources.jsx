"use client";

import { useReveal } from "../lib/useReveal";
import styles from "./Resources.module.scss";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { siteData } from "../lib/data";

export default function Resources() {
  const [ref, isRevealed] = useReveal();

  const whatsappLink = `https://wa.me/${siteData.company.phone}?text=${encodeURIComponent(
    "Hola, me interesa recibir contenido y consejos sobre contabilidad para mi empresa",
  )}`;

  const handleResourceClick = (resource) => {
    // demo: en prod abrís el artículo
    console.log("Abrir artículo:", resource.title);
  };

  return (
    <section className={styles.resources}>
      <div className={styles.container}>
        <SectionTitle
          subtitle="Recursos útiles"
          title="Contenido que te ayuda a crecer"
          description="Guías prácticas, consejos y novedades del mundo contable y tributario pensados para emprendedores y PYMEs."
        />

        <div
          ref={ref}
          className={`${styles.resourcesGrid} ${styles.reveal} ${
            isRevealed ? styles.revealed : ""
          }`}
        >
          {(siteData.resources || []).map((resource, index) => {
            const isComingSoon = resource.comingSoon ?? true;

            return (
              <div
                key={resource.id}
                className={`${isComingSoon ? styles.comingSoon : ""} ${styles.staggerItem}`}
                style={{ "--stagger-delay": index }}
              >
                <article
                  className={`${styles.resourceCard} ${
                    isComingSoon ? styles.disabled : ""
                  }`}
                  role={isComingSoon ? undefined : "button"}
                  tabIndex={isComingSoon ? -1 : 0}
                  aria-label={`Artículo: ${resource.title}`}
                  aria-disabled={isComingSoon}
                  onClick={() => !isComingSoon && handleResourceClick(resource)}
                  onKeyDown={(e) => {
                    if (isComingSoon) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleResourceClick(resource);
                    }
                  }}
                >
                  <div
                    className={styles.resourceImage}
                    data-category={resource.category}
                    aria-hidden="true"
                  />

                  <div className={styles.resourceContent}>
                    <div className={styles.resourceMeta}>
                      <span className={styles.resourceCategory}>
                        {resource.category}
                      </span>
                      <span className={styles.resourceReadTime}>
                        {resource.readTime}
                      </span>
                    </div>

                    <h3 className={styles.resourceTitle}>{resource.title}</h3>
                    <p className={styles.resourceExcerpt}>{resource.excerpt}</p>

                    <div className={styles.resourceFooter}>
                      <span className={styles.readMoreLink} aria-hidden="true">
                        Leer más →
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <div
          className={`${styles.cta} ${styles.reveal} ${
            isRevealed ? styles.revealed : ""
          }`}
        >
          <h3 className={styles.ctaTitle}>
            ¿Querés recibir más contenido útil?
          </h3>
          <p className={styles.ctaDescription}>
            Contactanos y te compartimos guías, plantillas y consejos
            personalizados para tu tipo de empresa. Sin spam, solo contenido de
            valor.
          </p>
          <Button variant="primary" size="large" href={whatsappLink} icon="📚">
            Recibir contenido exclusivo
          </Button>
        </div>
      </div>
    </section>
  );
}
