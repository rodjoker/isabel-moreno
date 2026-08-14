import SectionHeader from "@/components/ui/SectionHeader";
import GroupCard from "@/components/cards/GroupCard";
import { groupSpaces } from "@/data/groupSpaces";

export default function GroupSection() {
  return (
    <section id="grupales" className="group-section">
      <div className="container">
        <SectionHeader
          badge="Comunidad & Resonancia"
          title={
            <>
              Espacios de Trabajo <span className="gold-accent">Colectivo</span>
            </>
          }
          subtitle="Espacios guiados de contención y transformación a través de la inteligencia del grupo."
        />
        <div className="group-grid">
          {groupSpaces.map((group) => (
            <GroupCard key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}
