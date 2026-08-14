type IconTextVariant = "stat" | "modality" | "contact";

interface IconTextItemProps {
  icon?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  variant?: IconTextVariant;
  href?: string;
  target?: string;
  rel?: string;
  isStatic?: boolean;
}

export default function IconTextItem({
  icon,
  title,
  subtitle,
  variant = "modality",
  href,
  target,
  rel,
  isStatic = false,
}: IconTextItemProps) {
  if (variant === "stat") {
    return (
      <div className="hero-stat">
        <div className="stat-num">{title}</div>
        {subtitle ? <div className="stat-lbl">{subtitle}</div> : null}
      </div>
    );
  }

  if (variant === "contact") {
    const content = (
      <>
        {icon ? <i className={icon} /> : null}
        {title}
      </>
    );

    if (isStatic || !href) {
      return <span className="contact-link contact-link--static">{content}</span>;
    }

    return (
      <a href={href} target={target} rel={rel} className="contact-link">
        {content}
      </a>
    );
  }

  return (
    <div className="modality-item">
      {icon ? <i className={icon} /> : null}
      <div>
        <strong>{title}</strong>
        {subtitle ? <p style={{ margin: 0, fontSize: "0.88rem" }}>{subtitle}</p> : null}
      </div>
    </div>
  );
}
