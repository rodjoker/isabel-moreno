import Button from "@/components/ui/Button";
import IconTextItem from "@/components/ui/IconTextItem";
import { heroStats } from "@/data/hero";

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
          <p className="hero-desc">
            Un espacio de terapia profunda{" "}
            <strong>
              y transformación para personas dispuestas a soltar el control,
            </strong>{" "}
            vencer el miedo al cambio y recordar quiénes son en realidad.
          </p>
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
