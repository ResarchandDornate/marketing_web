import { useEffect, useRef } from 'react';

/**
 * Wrapper component for scroll-triggered reveal animations.
 * @param {string} animation - 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade'
 * @param {number} delay - delay in ms before animation starts
 * @param {number} duration - animation duration in ms
 * @param {string} className - additional classes
 * @param {boolean} stagger - if true, animates children with stagger
 * @param {number} staggerDelay - ms between each child animation
 */
export default function Reveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className = '',
  stagger = false,
  staggerDelay = 100,
  threshold = 0.15,
  as: Tag = 'div',
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (stagger) {
            const items = el.querySelectorAll('.stagger-item');
            items.forEach((item, i) => {
              setTimeout(() => {
                item.classList.add('revealed');
              }, delay + i * staggerDelay);
            });
          } else {
            setTimeout(() => {
              el.classList.add('revealed');
            }, delay);
          }
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger, staggerDelay, threshold]);

  const animClass = stagger ? 'reveal-stagger-container' : `reveal reveal-${animation}`;

  return (
    <Tag
      ref={ref}
      className={`${animClass} ${className}`}
      style={{ '--reveal-duration': `${duration}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/**
 * Wrap individual items inside a staggered Reveal container.
 */
export function RevealItem({ children, animation = 'fade-up', className = '', as: Tag = 'div', ...props }) {
  return (
    <Tag className={`stagger-item reveal reveal-${animation} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
