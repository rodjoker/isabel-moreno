import Button from "@/components/ui/Button";
import IconTextItem from "@/components/ui/IconTextItem";
import CheckList from "@/components/ui/CheckList";
import { heroStats, heroPainPoints } from "@/data/hero";

export default function Hero() {
  return (
    <header className="hero-section">
      <div className="container">
        <div className="hero-content">
          <span className="section-badge">
            Kinesiologa · Terapeuta Holística · Sabiduría Ancestral
          </span>
          <h1 className="hero-title">
            El regreso a tu centro:
            <br />
            <span className="gold-accent">Sana tu historia,</span> despierta tu
            propósito.
          </h1>
          <div className="hero-story">
            <h2>¿Te sientes así ahora mismo?</h2>
            <CheckList items={heroPainPoints} defaultIcon="fa-solid fa-circle-check" />

            <p>
              <strong>No tienes que cargar con todo esto tú solo/a.</strong>{" "}
              Cuando la mente se bloquea, el cuerpo y el alma guardan las
              respuestas. A través del Método Nóstos, vamos directos a la raíz
              para descodificar tu historia, soltar el pasado y devolverte tu
              libertad. El viaje de regreso a tu origen.
            </p>

            <div className="about-quote">
              &ldquo;Acompañándote en el regreso a tu esencia: Método
              Nóstos&rdquo;.
            </div>
          </div>

          <div className="hero-buttons">
            <Button
              variant="gold"
              href="#constelacion"
              icon="fa-solid fa-wand-magic-sparkles"
            >
              Explorar Constelación 3D
            </Button>
            <Button
              variant="outline"
              href="#metodo-nostos"
              icon="fa-solid fa-compass"
            >
              Conocer Método Nóstos
            </Button>
          </div>

          <div className="hero-highlight-bar">
            {heroStats.map((stat) => (
              <IconTextItem
                key={stat.label}
                variant="stat"
                title={stat.num}
                subtitle={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
