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
            title={<span className="gold-accent">El Método Nóstos</span>}
            subtitle="A través del método Nóstos te ayudo a entender y a transformar lo que te pasa. Nóstos es un método de acompañamiento, guía y transformación para sostener a personas en momentos de crisis (laborales, personales, familiares...)."
          />

          <div className="text-center">
            <p className="section-subtitle">
              La palabra <em>nóstos</em>, proveniente del griego antiguo
              νόστος, trasciende con creces su traducción literal como
              &ldquo;regreso&rdquo; o &ldquo;vuelta a casa&rdquo;. En un
              sentido profundamente espiritual y existencial, el nóstos es el
              viaje del alma hacia su origen, el anhelo íntimo de retornar a
              la fuente primordial de donde todos provenimos y a la que, tarde
              o temprano, anhelamos volver.
            </p>
            <p className="section-subtitle">
              &ldquo;En el Método Nóstos, entendemos el bienestar como un
              &lsquo;retorno&rsquo;. Inspirados en la esencia del nóstos —el
              viaje de regreso al origen—, utilizamos la kinesiología
              holística para escuchar el lenguaje de tu cuerpo y liberar las
              memorias, bloqueos, traumas y tensiones que te alejan de tu
              centro. Te ofrecemos a través de sesiones individuales o bonos
              de sesiones el camino para desbloquear tu cuerpo y tu mente, con
              el objetivo de volver a habitar plenamente tu hogar interior y
              reconectar con tu verdadera esencia.&rdquo;
            </p>
          </div>

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
              Información sobre el Método Nóstos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
