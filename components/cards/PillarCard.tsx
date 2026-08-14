import Badge from "@/components/ui/Badge";
import { NostosPillar } from "@/lib/types";

export default function PillarCard({ step, title, description, tag }: NostosPillar) {
  return (
    <div className="pillar-card">
      <div>
        <div className="pillar-step">{step}</div>
        <h3 className="pillar-title">{title}</h3>
        <p className="pillar-desc">{description}</p>
      </div>
      <div>
        <Badge variant="tag" icon="fa-solid fa-check">
          {tag}
        </Badge>
      </div>
    </div>
  );
}
