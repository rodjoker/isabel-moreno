import IconCircle from "@/components/ui/IconCircle";
import { PainPoint } from "@/lib/types";

export default function PainCard({ icon, title, description }: PainPoint) {
  return (
    <div className="pain-card">
      <IconCircle icon={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
