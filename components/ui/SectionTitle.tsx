interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionTitleProps) {
  const titleWithHighlight = highlight
    ? title.replace(
        highlight,
        `<span class="text-brand-green">${highlight}</span>`
      )
    : title;

  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block mb-3 px-4 py-1 bg-green-50 text-brand-green text-sm font-semibold rounded-full">
          {badge}
        </span>
      )}
      <h2
        className="font-display text-3xl md:text-4xl font-bold text-brand-dark leading-tight"
        dangerouslySetInnerHTML={{ __html: titleWithHighlight }}
      />
      {subtitle && (
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
