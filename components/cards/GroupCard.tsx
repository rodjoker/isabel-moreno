import Button from "@/components/ui/Button";
import CheckList from "@/components/ui/CheckList";
import { GroupSpace } from "@/lib/types";

export default function GroupCard({
  badge,
  title,
  description,
  features,
  buttonLabel,
  buttonHref,
}: GroupSpace) {
  return (
    <div className="group-card">
      <div>
        <span className="section-badge">{badge}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <CheckList items={features} />
      </div>
      <Button variant="outline" href={buttonHref}>
        {buttonLabel}
      </Button>
    </div>
  );
}
