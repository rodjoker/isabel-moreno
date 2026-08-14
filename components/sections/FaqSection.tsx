"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import FaqItem from "./FaqItem";
import { faqEntries } from "@/data/faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <SectionHeader
          badge="Claridad & Confianza"
          title="Preguntas Frecuentes"
          subtitle="Respuestas a las dudas más habituales sobre las terapias y el acompañamiento."
        />
        <div className="faq-accordion">
          {faqEntries.map((entry, index) => (
            <FaqItem
              key={entry.question}
              question={entry.question}
              answer={entry.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
