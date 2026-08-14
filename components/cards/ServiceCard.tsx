import Button from "@/components/ui/Button";
import { Service } from "@/lib/types";

export default function ServiceCard({
  icon,
  title,
  description,
  sublist,
  buttonLabel,
  buttonHref,
}: Service) {
  return (
    <div className="service-card">
      <div>
        <span className="service-icon">
          <i className={icon} />
        </span>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="service-sublist">
          <h4>{sublist.title}</h4>
          <ul>
            {sublist.items.map((item, index) => (
              <li key={index}>
                <i className={item.icon} />
                <div>{item.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="service-footer">
        <Button variant="gold" href={buttonHref}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
