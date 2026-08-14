import SectionHeader from "@/components/ui/SectionHeader";
import PainCard from "@/components/cards/PainCard";
import { painPoints } from "@/data/painPoints";

export default function PainSection() {
  return (
    <section className="pain-section">
      <div className="container">
        <SectionHeader
          badge="Identifica tu momento vital"
          title="¿Sientes que el cuerpo habla lo que tu mente no puede resolver?"
          subtitle="Los síntomas y encrucijadas vitales son memorias y lealtades inconscientes pidiendo ser escuchadas e integradas."
        />
        <div className="pain-cards">
          {painPoints.map((point) => (
            <PainCard key={point.title} {...point} />
          ))}
        </div>
      </div>
    </section>
  );
}
