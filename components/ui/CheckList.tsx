interface CheckListItem {
  icon?: string;
  label: React.ReactNode;
}

interface CheckListProps {
  items: (string | CheckListItem)[];
  defaultIcon?: string;
}

export default function CheckList({
  items,
  defaultIcon = "fa-solid fa-circle-check",
}: CheckListProps) {
  return (
    <ul className="check-list">
      {items.map((item, index) => {
        const isString = typeof item === "string";
        const icon = isString ? defaultIcon : item.icon ?? defaultIcon;
        const label = isString ? item : item.label;
        return (
          <li key={index}>
            <i className={icon} />
            {label}
          </li>
        );
      })}
    </ul>
  );
}
