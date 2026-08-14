interface SectionHeaderProps {
  badge: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  onDark?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  onDark = false,
}: SectionHeaderProps) {
  return (
    <div className="text-center">
      <span
        className={`section-badge${onDark ? " section-badge--on-dark" : ""}`}
      >
        {badge}
      </span>
      <h2
        className={`section-title${onDark ? " section-title--on-dark" : ""}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`section-subtitle${
            onDark ? " section-subtitle--on-dark" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
