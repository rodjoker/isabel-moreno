import { Service, ModalityItem } from "@/lib/types";

export const services: Service[] = [
  {
    id: "kinesiologia",
    icon: "fa-solid fa-hand-holding-heart",
    title: "Kinesiología & Terapia de Respuesta Espiritual (T.R.E)",
    description:
      "TESTAJE:",
    sublist: {
      title: "Herramientas de Corrección Somática:",
      items: [
        { icon: "fa-solid fa-check", label: "Kinesiología Holística y Emocional (K.E.P): A través del testaje muscular, localizamos el origen exacto de tu bloqueo físico o emocional para ir directo a la raíz del problema." },
        { icon: "fa-solid fa-check", label: "Terapia de Respuesta Espiritual (T.R.E): Una técnica profunda para limpiar los programas subconscientes y liberar los bloqueos del alma que te impiden avanzar." },
      ],
    },
    buttonLabel: "Reservar Sesión de Kinesiología",
    buttonHref: "#contacto",
  },
  {
    id: "arquetipos",
    icon: "fa-solid fa-dharmachakra",
    title: "Tratamiento con Arquetipos",
    description:
      "Tratamiento para recuperar el equilibrio, ordenar la energía y volver a sentirte alineado.",
    sublist: {
      title: "Enfoque Energético Transpersonal:",
      items: [
        { icon: "fa-solid fa-check", label: "Alineamiento del campo energético." },
        { icon: "fa-solid fa-check", label: "Armonización a través de arquetipos." },
      ],
    },
    buttonLabel: "Reservar Alineación",
    buttonHref: "#contacto",
  },
  {
    id: "art-coaching",
    icon: "fa-solid fa-brain",
    title: "Art-Coaching & Neurográfica",
    description: "Un método creativo y visual para transformar lo que no puedes explicar con palabras, liberar tensiones y encontrar nuevas soluciones desde la calma.",
    sublist: {
      title: "Algoritmos Neurográficos:",
      items: [
        { icon: "fa-solid fa-check", label: "Procesar emociones negativas." },
        { icon: "fa-solid fa-check", label: "Resolución de conflictos y reducción de la ansiedad y el estrés." },
      ],
    },
    buttonLabel: "Reservar Sesión de Art-Coaching",
    buttonHref: "#contacto",
  },
  {
    id: "mapas-cuanticos",
    icon: "fa-solid fa-atom",
    title: "Estudio Numerológico, Calendario Maya & Regresiones",
    description:
      "Cartografía multidimensional para descifrar el pacto evolutivo de tu alma y sanar memorias pasadas:",
    sublist: {
      title: "Herramientas de Diagnóstico Cuántico:",
      items: [
        {
          icon: "fa-solid fa-star",
          label:
            "Estudio Numerológico: Descubre tus talentos, comprende tus ciclos vitales y alínate con tu propósito a través de tu fecha y nombre.",
        },
        {
          icon: "fa-solid fa-moon",
          label:
            "Onda Encantada / Calendario Maya: Aprende a fluir con los ritmos naturales y comprende tu energía para vivir con mayor armonía diaria.",
        },
        {
          icon: "fa-solid fa-infinity",
          label:
            "Hipnosis Clínica Reparadora & Regresiones: Un viaje guiado para sanar el origen de bloqueos profundos y liberar cargas del pasado que te frenan hoy.",
        },
      ],
    },
    buttonLabel: "Solicitar Estudio Numerologico",
    buttonHref: "#contacto",
  },
];

export const modalityItems: ModalityItem[] = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Consulta Presencial",
    description: "Espacio terapéutico en Guipuzcoa",
  },
  {
    icon: "fa-solid fa-video",
    title: "Sesiones Online",
    description: "Zoom, Skype o videollamada internacional",
  },
  {
    icon: "fa-solid fa-certificate",
    title: "Garantía Terapéutica",
    description: "+15 años de formación avalada",
  },
];
