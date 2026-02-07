// browser.js - Utilidades para APIs del navegador de forma segura para SSR

// Verificar si estamos en el navegador
export const isBrowser = () => typeof window !== "undefined";

// Wrapper seguro para APIs del navegador
export const safeWindow = {
  // Scroll suave a un elemento
  scrollToElement: (selector, offset = 80) => {
    if (!isBrowser()) return;

    const element = document.querySelector(selector);
    if (element) {
      const offsetTop = element.offsetTop - offset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  },

  // Obtener posición de scroll
  getScrollY: () => {
    return isBrowser() ? window.scrollY : 0;
  },

  // Agregar event listener de forma segura
  addEventListener: (event, handler, options) => {
    if (!isBrowser()) return () => {};

    window.addEventListener(event, handler, options);
    return () => window.removeEventListener(event, handler);
  },

  // Media query de forma segura
  matchMedia: (query) => {
    if (!isBrowser() || !window.matchMedia) return { matches: false };
    return window.matchMedia(query);
  },

  // Manipular overflow del body
  setBodyOverflow: (value) => {
    if (!isBrowser()) return "";

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = value;
    return prevOverflow;
  },

  // Restaurar overflow del body
  restoreBodyOverflow: (previousValue) => {
    if (!isBrowser()) return;
    document.body.style.overflow = previousValue;
  },
};

// Hook para verificar si IntersectionObserver está disponible
export const useIntersectionObserverSupport = () => {
  return isBrowser() && typeof IntersectionObserver !== "undefined";
};
