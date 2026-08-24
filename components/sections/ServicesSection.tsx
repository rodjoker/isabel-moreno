import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/cards/ServiceCard";
import IconTextItem from "@/components/ui/IconTextItem";
import { services, modalityItems } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="individuales" className="individual-section">
      <div className="container">
        <SectionHeader
          badge="MÉTODO NÓSTOS Isabel Moreno"
          title="Sesiones Individuales & Bono de sesiones"
          subtitle={
            <>
              Terapias personalizadas.
              Disponibles en formato <strong>presencial (Guipuzcoa)</strong> y{" "}
              <strong>online (Zoom / Skype)</strong>.
            </>
          }
        />

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="modality-box">
          {modalityItems.map((item) => (
            <IconTextItem
              key={item.title}
              variant="modality"
              icon={item.icon}
              title={item.title}
              subtitle={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
