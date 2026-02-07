"use client";

import styles from "./Hero.module.scss";
import Button from "./ui/Button";
import { siteData, socialProof } from "../lib/data";
import { safeWindow } from "../lib/browser";

export default function Hero() {
  const message = encodeURIComponent(
    "Hola, me interesa una evaluación sin costo para mi empresa",
  );
  const whatsappLink = `https://wa.me/${siteData.company.phone}?text=${message}`;

  const scrollToPlanes = (e) => {
    e.preventDefault();
    safeWindow.scrollToElement("#planes");
  };

  // soporta:
  // - socialProof = [{ number, label }]
  // - socialProof = { stats: ["200+ PYMEs", "5 años", ...] }
  const stats = Array.isArray(socialProof)
    ? socialProof
    : Array.isArray(socialProof?.stats)
      ? socialProof.stats
          .map((stat) => {
            if (typeof stat === "string") {
              const [number, ...labelParts] = stat.split(" ");
              return { number, label: labelParts.join(" ") };
            }
            if (stat && typeof stat === "object") return stat;
            return null;
          })
          .filter(Boolean)
      : [];

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={`${styles.pillLabel} ${styles.reveal}`}>
              <span className={styles.pillIcon}>🏢</span>
              <span>Especialistas en PYMEs</span>
            </div>

            <h1
              className={`${styles.title} ${styles.reveal} ${styles.revealDelay1}`}
            >
              Gestión contable integral para{" "}
              <span className={styles.highlight}>PYMEs que quieren crecer</span>
            </h1>

            <p
              className={`${styles.subtitle} ${styles.reveal} ${styles.revealDelay2}`}
            >
              Simplificamos tu contabilidad, liquidación de sueldos e impuestos
              para que te enfoques en hacer crecer tu negocio. Tecnología +
              experiencia humana.
            </p>

            <div
              className={`${styles.actions} ${styles.reveal} ${styles.revealDelay3}`}
            >
              <Button
                variant="primary"
                size="large"
                onClick={scrollToPlanes}
                className={styles.primaryCta}
              >
                Ver planes y precios
              </Button>

              <Button
                variant="secondary"
                size="large"
                href={whatsappLink}
                className={styles.secondaryCta}
              >
                Evaluación gratuita
              </Button>
            </div>

            <div className={styles.socialProof}>
              {stats.map((item, index) => (
                <div key={index} className={styles.proofItem}>
                  <span className={styles.number}>{item.number}</span>
                  <span className={styles.label}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.mediaContent}>
            <div className={styles.glow} aria-hidden="true" />

            <div className={styles.dashboardMock}>
              <div className={styles.dashboardHeader}>
                <div className={styles.dashboardNav}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.dashboardTitle}>NODO Dashboard</div>
              </div>

              <div className={styles.dashboardBody}>
                <div className={styles.miniCard}>
                  <div className={styles.miniChart} />
                </div>
                <div className={styles.miniCard}>
                  <div className={styles.miniChart} />
                </div>
                <div className={styles.miniCardWide}>
                  <div className={styles.miniLine} />
                  <div className={styles.miniLine} />
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div
              className={styles.floatingCard}
              style={{ top: "18%", right: "12%" }}
            >
              <div className={styles.cardIcon}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 2L10.5 7h3l-2.5 5L6 7H3l2.5-5z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>Vencimientos al día</div>
                <div className={styles.cardValue}>100%</div>
              </div>
            </div>

            <div
              className={styles.floatingCard}
              style={{ top: "46%", right: "22%" }}
            >
              <div className={styles.cardIcon}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 4h10v8H3V4zM2 4a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>Liquidación sueldos</div>
                <div className={styles.cardValue}>Automática</div>
              </div>
            </div>

            <div
              className={styles.floatingCard}
              style={{ bottom: "22%", right: "8%" }}
            >
              <div className={styles.cardIcon}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 2h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>Conciliación bancaria</div>
                <div className={styles.cardValue}>Sincronizada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
