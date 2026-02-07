// useReveal.js - Hook para animaciones de reveal on scroll

import { useEffect, useRef, useState } from "react";

export const useReveal = (threshold = 0.1, rootMargin = "0px") => {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Verificar si el usuario prefiere movimiento reducido
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isRevealed) {
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, isRevealed]);

  return [ref, isRevealed];
};

// Hook para múltiples elementos con stagger
export const useRevealStagger = (delay = 100) => {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isRevealed) {
          const children = element.children;
          Array.from(children).forEach((child, index) => {
            child.style.animationDelay = `${index * delay}ms`;
          });
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, isRevealed]);

  return [ref, isRevealed];
};
