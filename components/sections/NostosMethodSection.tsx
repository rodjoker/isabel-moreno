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
            subtitle="A través del método Nóstos te ayudo a entender y a transformar lo que te pasa. Nóstos es un método de acompañamiento, guía y transformación para sostener a personas en momentos de crisis (laborales, personales, familiares...)."
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
