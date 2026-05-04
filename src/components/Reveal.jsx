"use client";

/**
 * Wrapper component for scroll-triggered reveal animations.
 *
 * NOTE: The hide-then-show entrance animation has been disabled to ensure
 * content is always visible (for SEO crawlers, screenshot tools, no-JS
 * clients, and slow networks). The component is now a passthrough that
 * keeps the existing class names so the rest of the codebase doesn't need
 * to change. The CSS in index.css forces opacity: 1 / transform: none.
 */
export default function Reveal({
  children,
  animation = 'fade-up',
  className = '',
  stagger = false,
  as: Tag = 'div',
  // Unused props kept in the signature for backwards compatibility:
  // delay, duration, staggerDelay, threshold
  ...rest
}) {
  // Strip out animation-only props before forwarding to the DOM element to
  // avoid React warnings about unknown HTML attributes.
  const { delay, duration, staggerDelay, threshold, ...props } = rest;
  void delay; void duration; void staggerDelay; void threshold;

  const animClass = stagger ? 'reveal-stagger-container' : `reveal reveal-${animation}`;

  return (
    <Tag className={`${animClass} ${className}`} {...props}>
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
