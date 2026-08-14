"use client";

import Button from "@/components/ui/Button";
import type { ConstellationNode } from "@/lib/types";

interface StarInfoCardProps {
  node: ConstellationNode | null;
  onClose: () => void;
}

export default function StarInfoCard({ node, onClose }: StarInfoCardProps) {
  return (
    <div className={`star-info-card${node ? " active" : ""}`}>
      <span className="close-btn" onClick={onClose}>
        <i className="fa-solid fa-xmark" />
      </span>
      {node ? (
        <>
          <span className="star-category-label">{node.category}</span>
          <h4>{node.title}</h4>
          <p>{node.desc}</p>
          <Button variant="gold" size="sm" href={node.link}>
            Ver Terapia Relacionada
          </Button>
        </>
      ) : null}
    </div>
  );
}
