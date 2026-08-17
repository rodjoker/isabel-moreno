import { Service, ModalityItem } from "@/lib/types";

export const services: Service[] = [
  {
    id: "kinesiologia",
    icon: "fa-solid fa-hand-holding-heart",
    title: "Kinesiología & Terapia de Respuesta Espiritual (T.R.E)",
    description:
      "Testaje muscular neuromuscular (Kinesiología Holística y Emocional Práctica K.E.P) para localizar el origen exacto del bloqueo físico o emocional. Aplicación de T.R.E para la limpieza de programas subconscientes y bloqueos del alma.",
    sublist: {
      title: "Herramientas de Corrección Somática:",
      items: [
        { icon: "fa-solid fa-check", label: "Testaje holístico de órganos, meridianos y emociones." },
        { icon: "fa-solid fa-check", label: "Apoyo con Flores de Bach, Aceites Esenciales y Auriculoterapia." },
      ],
    },
    buttonLabel: "Reservar Sesión de Kinesiología",
    buttonHref: "#contacto",
  },
  {
    id: "arquetipos",
    icon: "fa-solid fa-dharmachakra",
    title: "Sanación & Alineación con Arquetipos",
    description:
      "Abordaje transpersonal para reprogramar lealtades inconscientes y restaurar el flujo vital mediante vibración sutil, Cristales Litios, Gemoterapia y Reiki Usui Shiki Ryoho.",
    sublist: {
      title: "Enfoque Energético Transpersonal:",
      items: [
        { icon: "fa-solid fa-check", label: "Desactivación de máscaras psíquicas y patrones heredados." },
        { icon: "fa-solid fa-check", label: "Armonización áurica con cristales de luz Litios y gemas." },
      ],
    },
    buttonLabel: "Reservar Alineación",
    buttonHref: "#contacto",
  },
  {
    id: "art-coaching",
    icon: "fa-solid fa-brain",
    title: "Art-Coaching & Neurográfica",
    description: "Método de dibujo terapéutico y transformacional.",
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
            "Estudio Numerológico: Análisis de misión, dones y números maestros.",
        },
        {
          icon: "fa-solid fa-moon",
          label:
            "Onda Encantada / Calendario Maya: Lectura de Kin de nacimiento, sello galáctico y sincronía cósmica Tzolkin.",
        },
        {
          icon: "fa-solid fa-infinity",
          label:
            "Hipnosis Clínica Reparadora & Regresiones: Descenso transpersonal a memorias de vidas pasadas e infancia para reparación del trauma raíz.",
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
