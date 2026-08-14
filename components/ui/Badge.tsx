interface BadgeProps {
  children: React.ReactNode;
  icon?: string;
  variant?: "pill" | "tag";
  className?: string;
}

export default function Badge({
  children,
  icon,
  variant = "pill",
  className,
}: BadgeProps) {
  const base = variant === "tag" ? "pillar-tag" : "cv-pill";
  return (
    <span className={className ? `${base} ${className}` : base}>
      {icon ? <i className={icon} /> : null} {children}
    </span>
  );
}
