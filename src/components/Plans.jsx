"use client";

import { useReveal } from "../lib/useReveal";
import styles from "./Plans.module.scss";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { siteData } from "../lib/data";

export default function Plans() {
  const [ref, isRevealed] = useReveal();

  const getWhatsappLink = (planName) => {
    const text = encodeURIComponent(
      `Hola, me interesa el ${planName}. ¿Pueden darme más información?`,
    );
    return `https://wa.me/${siteData.company.phone}?text=${text}`;
  };

  return (
    <section id="planes" className={styles.plans}>
      <div className={styles.container}>
        <SectionTitle
          subtitle="Planes y Precios"
          title="Soluciones escalables para cada etapa de tu negocio"
          description="Planes transparentes, sin costos ocultos. Incluyen soporte prioritario y la tranquilidad de tener todo en orden."
        />

        <div
          ref={ref}
          className={`${styles.plansGrid} ${styles.reveal} ${
            isRevealed ? styles.revealed : ""
          }`}
        >
          {(siteData.plans || []).map((plan, index) => (
            <article
              key={plan.id}
              className={`${styles.planCard} ${
                plan.highlighted ? styles.highlighted : ""
              } ${styles.staggerItem}`}
              style={{ "--stagger-delay": index }}
              aria-label={`Plan ${plan.name}`}
            >
              {plan.highlighted && (
                <div className={styles.popularBadge} aria-label="Más popular">
                  <span className={styles.badgeIcon} aria-hidden="true">
                    ★
                  </span>
                  Más Popular
                </div>
              )}

              <header className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.planSubtitle}>{plan.subtitle}</div>
                <p className={styles.planDescription}>{plan.description}</p>

                <div className={styles.planPricing}>
                  <div className={styles.planPrice}>{plan.price}</div>
                  <div className={styles.planPriceNote}>{plan.priceNote}</div>
                </div>
              </header>

              <ul
                className={styles.planFeatures}
                aria-label="Características del plan"
              >
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.planFeature}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.planAction}>
                <Button
                  variant={plan.highlighted ? "primary" : "secondary"}
                  size="large"
                  fullWidth
                  href={getWhatsappLink(plan.name)}
                  className={styles.planButton}
                  aria-label={`Consultar por el plan ${plan.name} por WhatsApp`}
                >
                  {plan.highlighted ? "Empezar ahora" : "Más información"}
                </Button>

                <div className={styles.planNote}>
                  Respuesta rápida • Sin compromiso
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* <div
          className={`${styles.additionalInfo} ${styles.reveal} ${
            isRevealed ? styles.revealed : ""
          }`}
        >
          <div className={styles.customPlan}>
            <h3 className={styles.customPlanTitle}>
              ¿Necesitás algo específico?
            </h3>
            <p className={styles.customPlanText}>
              Diseñamos soluciones personalizadas para empresas con necesidades
              particulares. Conversemos sobre tu caso y encontremos la mejor
              opción.
            </p>
            <Button
              variant="outline"
              href={getWhatsappLink("consulta personalizada")}
              className={styles.customPlanButton}
              icon="💬"
            >
              Consultá por un plan a medida
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
