import Button from "@/components/ui/Button";
import IconTextItem from "@/components/ui/IconTextItem";
import { contactLinks, whatsappHref, emailHref } from "@/data/contact";

export default function CtaSection() {
  return (
    <section id="contacto" className="cta-final-section">
      <div className="container">
        <span className="section-badge">Tu Momento de Retorno</span>
        <h2 className="cta-final-title">
          Tu viaje de regreso a ti{" "}
          <span className="gold-accent">comienza hoy</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
          Ponte en contacto directo con Isabel para valorar tu caso y elegir la
          sesión o programa que mejor se adapta a tu momento vital.
        </p>

        <div className="cta-buttons-bar">
          <Button
            variant="gold"
            size="lg"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            icon="fa-brands fa-whatsapp"
          >
            Contactar por WhatsApp
          </Button>
          <Button
            variant="outline"
            size="lg"
            href={emailHref}
            icon="fa-regular fa-envelope"
          >
            Enviar Correo
          </Button>
        </div>

        <div className="contact-direct-bar">
          {contactLinks.map((link) => (
            <IconTextItem
              key={link.label}
              variant="contact"
              icon={link.icon}
              title={link.label}
              href={link.href}
              isStatic={link.static}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
