// Header.jsx - Navegación principal
"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Button from "./ui/Button";
import { navigation, siteData } from "../lib/data";
import { safeWindow } from "../lib/browser";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(safeWindow.getScrollY() > 20);
    return safeWindow.addEventListener("scroll", handleScroll, {
      passive: true,
    });
  }, []);

  // Lock scroll + ESC close
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const prevOverflow = safeWindow.setBodyOverflow("hidden");

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    const removeKeyListener = safeWindow.addEventListener("keydown", onKeyDown);

    return () => {
      safeWindow.restoreBodyOverflow(prevOverflow);
      removeKeyListener();
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    safeWindow.scrollToElement(href);
    closeMobileMenu();
  };

  const message = encodeURIComponent(
    "Hola, me interesa una evaluación sin costo para mi empresa",
  );
  const whatsappLink = `https://wa.me/${siteData.company.phone}?text=${message}`;

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.container}>
          <a
            href="#hero"
            className={styles.logo}
            onClick={(e) => handleNavClick(e, "#hero")}
          >
            <div className={styles.logoIcon}>N</div>
            <span>NODO</span>
          </a>

          <nav className={styles.nav} aria-label="Navegación principal">
            <ul className={styles.navList}>
              {navigation.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  <a
                    href={item.href}
                    className={styles.navLink}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Button
              variant="primary"
              size="small"
              href={whatsappLink}
              className={styles.ctaButton}
            >
              💬 Consulta Gratuita
            </Button>

            <button
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              <div
                className={`${styles.mobileMenuIcon} ${
                  isMobileMenuOpen ? styles.openIcon : ""
                }`}
              >
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <nav
          id="mobile-menu"
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.openMenu : ""
          }`}
          aria-label="Menú móvil"
        >
          <ul className={styles.mobileNavList}>
            {navigation.map((item) => (
              <li key={item.href} className={styles.mobileNavItem}>
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.mobileCta}>
            <Button variant="primary" fullWidth href={whatsappLink}>
              💬 Consulta Gratuita
            </Button>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            zIndex: 1040,
            cursor: "pointer",
          }}
        />
      )}
    </>
  );
}
