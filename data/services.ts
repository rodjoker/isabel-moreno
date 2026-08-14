import { Service, ModalityItem } from "@/lib/types";

export const services: Service[] = [
  {
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
    icon: "fa-regular fa-eye",
    title: "Clarividencia Sensitiva & Lectura Sutil",
    description:
      "Canalización e intuición aplicada sustentada en Terapia Tensérgica (Visión Aural) y Técnicas de Alta Conciencia (TAC) para discernir encrucijadas vitales inmediatas y liberar energía densa retenida.",
    sublist: {
      title: "Aplicación Inmediata:",
      items: [
        { icon: "fa-solid fa-check", label: "Lectura del campo áurico y vórtices energéticos." },
        { icon: "fa-solid fa-check", label: "Claridad sobre decisiones de vida y vínculos kármicos." },
      ],
    },
    buttonLabel: "Solicitar Lectura Sutil",
    buttonHref: "#contacto",
  },
  {
    icon: "fa-solid fa-atom",
    title: "Mapas Cuánticos de Identidad & Propósito",
    description:
      "Cartografía multidimensional para descifrar el pacto evolutivo de tu alma y sanar memorias pasadas:",
    sublist: {
      title: "Herramientas de Diagnóstico Cuántico:",
      items: [
        {
          icon: "fa-solid fa-star",
          label:
            "Estudio Numerológico Transpersonal: Análisis de misión, dones y números maestros (Método Sebastián Santa Cruz & Ana Adela Celani).",
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
    buttonLabel: "Crear Mi Mapa Cuántico",
    buttonHref: "#contacto",
  },
];

export const modalityItems: ModalityItem[] = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Consulta Presencial",
    description: "Espacio terapéutico en Donostia",
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
