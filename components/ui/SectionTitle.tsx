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
        `<span class="text-gradient">${highlight}</span>`
      )
    : title;

  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block mb-3 px-4 py-1 bg-indigo-50 text-brand-indigo text-sm font-semibold rounded-full">
          {badge}
        </span>
      )}
      <h2
        className="font-display text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
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
