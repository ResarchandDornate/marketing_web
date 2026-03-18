import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Uses Intersection Observer to add 'revealed' class when element enters viewport.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}

/**
 * Hook that observes multiple children of a container for staggered reveal.
 * Applies 'revealed' class to each child with a staggered delay.
 */
export function useStaggerReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll('.stagger-item');
    if (!children.length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('revealed');
            }, i * (options.staggerDelay ?? 100));
          });
          observer.unobserve(container);
        }
      },
      { threshold: options.threshold ?? 0.1, rootMargin: options.rootMargin ?? '0px 0px -30px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.staggerDelay]);

  return ref;
}
