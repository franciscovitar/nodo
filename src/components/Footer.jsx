"use client";

import styles from "./Footer.module.scss";
import Button from "./ui/Button";
import { siteData, navigation } from "../lib/data";
import { safeWindow } from "../lib/browser";

export default function Footer() {
  // Usar año estático para evitar problemas de hidratación
  const currentYear = 2026;

  const whatsappLink = `https://wa.me/${siteData.company.phone}?text=${encodeURIComponent(
    "Hola, me interesa contactar con NODO para conocer más sobre sus servicios",
  )}`;

  const scrollToSection = (href) => {
    safeWindow.scrollToElement(href);
  };

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>N</div>
              <span className={styles.logoText}>NODO</span>
            </div>

            <div className={styles.tagline}>{siteData.company.tagline}</div>

            <p className={styles.description}>
              Ayudamos a PYMEs de toda Argentina a ordenar su contabilidad,
              cumplir con sus obligaciones tributarias y enfocar su energía en
              lo que mejor saben hacer: hacer crecer su negocio.
            </p>

            <Button
              variant="primary"
              href={whatsappLink}
              icon="💬"
              className={styles.ctaButton}
            >
              Empezar ahora
            </Button>
          </div>

          <div className={styles.footerSection}>
            <h4>Navegación</h4>
            <ul className={styles.footerList}>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.footerLink}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Servicios</h4>
            <ul className={styles.footerList}>
              {siteData.services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicios"
                    className={styles.footerLink}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#servicios");
                    }}
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contacto</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>💬</span>
                <div className={styles.contactText}>
                  <a href={whatsappLink}>WhatsApp: +{siteData.company.phone}</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div className={styles.contactText}>
                  <a href={`mailto:${siteData.company.email}`}>
                    {siteData.company.email}
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div className={styles.contactText}>
                  {siteData.company.address}
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>⏰</span>
                <div className={styles.contactText}>
                  Lunes a Viernes: 9:00 - 18:00
                  <br />
                  Sábados: 9:00 - 13:00
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {currentYear}{" "}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
            >
              NODO Contable & Tributario
            </a>
            . Todos los derechos reservados.
          </div>

          <div className={styles.legalLinks}>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Política de Privacidad
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Términos y Condiciones
            </a>
          </div>
        </div>

        <div className={styles.disclaimer}>
          <p>
            <strong>Proyecto conceptual / demo</strong> - Esta es una landing
            page de demostración creada para mostrar capacidades de diseño y
            desarrollo. Los datos de contacto y servicios son ficticios.
          </p>
        </div>
      </div>
    </footer>
  );
}
