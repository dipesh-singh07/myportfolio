// src/hooks/useScrollReveal.js
import { useEffect, useRef } from 'react';

/**
 * Triggers 'visible' class when an element scrolls into view.
 * Returns a ref to attach to the target element.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el); // Fire only once
        }
      },
      { threshold: 0.12, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Attach reveal to multiple children inside a container.
 * Each child with className 'reveal' gets triggered in sequence.
 */
export function useChildReveal(stagger = 80) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.querySelectorAll('.reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = children.indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * stagger);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [stagger]);

  return containerRef;
}
