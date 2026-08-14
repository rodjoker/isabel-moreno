"use client";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) {
  return (
    <div className={`faq-item${isOpen ? " active" : ""}`}>
      <button
        type="button"
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <i className="fa-solid fa-chevron-down" />
      </button>
      <div className="faq-answer" style={{ maxHeight: isOpen ? "600px" : "0px" }}>
        <div className="faq-answer-inner">{answer}</div>
      </div>
    </div>
  );
}
