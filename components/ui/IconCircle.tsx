interface IconCircleProps {
  icon: string;
}

export default function IconCircle({ icon }: IconCircleProps) {
  return (
    <div className="pain-icon">
      <i className={icon} />
    </div>
  );
}
