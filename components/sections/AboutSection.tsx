import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { aboutInfo } from "@/data/aboutInfo";

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-card">
            <div className="about-avatar-placeholder">
              <i className={aboutInfo.avatarIcon} />
            </div>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "0.2rem" }}>
              {aboutInfo.name}
            </h3>
            <p
              style={{
                color: "var(--gold-deep)",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {aboutInfo.role}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                marginTop: "1rem",
              }}
            >
              {aboutInfo.shortBio}
            </p>

            <div className="cv-badges">
              {aboutInfo.cvBadges.map((badge) => (
                <Badge key={badge.label} icon="fa-solid fa-check">
                  {badge.label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="about-content">
            <span className="section-badge">{aboutInfo.contentBadge}</span>
            <h2 style={{ fontSize: "2.8rem", lineHeight: 1.2 }}>
              {aboutInfo.contentTitle}
            </h2>
            <div className="about-quote">{aboutInfo.quote}</div>
            {aboutInfo.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div style={{ marginTop: "2rem" }}>
              <Button variant="outline" href={aboutInfo.buttonHref}>
                {aboutInfo.buttonLabel}
              </Button>
            </div>
          </div>

          <div className="about-photo-card">
            <Image
              src={aboutInfo.photo.src}
              alt={aboutInfo.photo.alt}
              fill
              sizes="(max-width: 992px) 90vw, 320px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
