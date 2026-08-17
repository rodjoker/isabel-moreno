"use client";

import dynamic from "next/dynamic";
import SectionHeader from "@/components/ui/SectionHeader";

const Constellation = dynamic(() => import("@/components/three/Constellation"), {
  ssr: false,
  loading: () => <div className="constellation-wrapper" />,
});

export default function ConstellationSection() {
  return (
    <section id="constelacion" className="constellation-section">
      <div className="container">
        <SectionHeader
          onDark
          badge="Experiencia Interactiva 3D"
          title={
            <>
              La Constelación{" "}
              <span style={{ color: "var(--gold-light)" }}>
                del Método Nóstos
              </span>
            </>
          }
          subtitle={
            <>
              Interactúa en 3D con el mapa arquetípico y energético. Arrastra
              para orbitar, haz zoom y{" "}
              <strong>haz clic en cualquier esfera dorada</strong> para
              revelar las herramientas con las que trabajo.
            </>
          }
        />

        <Constellation />
      </div>
    </section>
  );
}
