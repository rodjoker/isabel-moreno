import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import PillarCard from "@/components/cards/PillarCard";
import { nostosPillars } from "@/data/nostosMethod";

export default function NostosMethodSection() {
  return (
    <section id="metodo-nostos" className="nostos-section">
      <div className="container">
        <div className="nostos-box">
          <SectionHeader
            badge="Programa Premium de Acompañamiento Integral"
            title={
              <>
                El Método <span className="gold-accent">Nóstos</span>
              </>
            }
            subtitle="Un circuito secuencial, cerrado y multidisciplinar sostenido por 3 profesionales (terapia transpersonal/energética con Isabel + psicología/tarot + coaching de acción)."
          />

          <div className="nostos-grid">
            {nostosPillars.map((pillar) => (
              <PillarCard key={pillar.title} {...pillar} />
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="gold"
              href="#contacto"
              icon="fa-solid fa-calendar-check"
            >
              Postular al Método Nóstos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
