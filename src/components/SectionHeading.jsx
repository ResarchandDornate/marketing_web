export default function SectionHeading({ title, subtitle, badge, center = true }) {
  return (
    <div className={`mb-8 ${center ? 'text-center' : 'text-left'}`}>
      {badge && (
        <div className={`section-badge mb-3 ${center ? 'mx-auto' : ''}`}>{badge}</div>
      )}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-2.5 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm text-text-secondary max-w-lg leading-relaxed ${center ? 'mx-auto' : 'ml-0'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
