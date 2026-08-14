"use client";

import { useConstellation } from "./useConstellation";
import StarInfoCard from "./StarInfoCard";

export default function Constellation() {
  const { containerRef, canvasRef, activeNode, closeStarCard } = useConstellation();

  return (
    <div className="constellation-wrapper" ref={containerRef}>
      <div className="constellation-overlay">
        <i className="fa-solid fa-hand-pointer" /> Arrastra para girar · Rueda
        para zoom · Clic en los nodos
      </div>

      <canvas id="threejs-canvas" ref={canvasRef} />

      <StarInfoCard node={activeNode} onClose={closeStarCard} />
    </div>
  );
}
