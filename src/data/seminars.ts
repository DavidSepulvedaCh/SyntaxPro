export interface Seminar {
    id: number;
    title: string;
    description: string;
    duration: string;
    format: string;
    audience: string;
    highlights: string[];
}

export const seminars: Seminar[] = [
    {
        id: 1,
        title: "Introducción a Milieu Teaching",
        description:
            "Aprende los fundamentos de la metodología Milieu Teaching y cómo implementarla en tus sesiones terapéuticas.",
        duration: "8 horas",
        format: "Online en vivo",
        audience: "Fonoaudiólogos, terapeutas del lenguaje",
        highlights: [
            "Fundamentos teóricos del Milieu Teaching",
            "Estrategias prácticas de implementación",
            "Casos de estudio y ejemplos reales",
            "Certificado de participación",
        ],
    },
    {
        id: 2,
        title: "Estrategias Avanzadas de Intervención",
        description:
            "Profundiza en técnicas especializadas para intervención del lenguaje en contextos naturales.",
        duration: "12 horas",
        format: "Online en vivo + materiales descargables",
        audience: "Profesionales con experiencia básica",
        highlights: [
            "Técnicas avanzadas de modelado",
            "Adaptación a diferentes necesidades",
            "Evaluación de progreso",
            "Materiales y recursos profesionales",
        ],
    },
    {
        id: 3,
        title: "Intervención Temprana del Lenguaje",
        description:
            "Especialízate en la detección e intervención temprana de trastornos del lenguaje en niños.",
        duration: "10 horas",
        format: "Modalidad híbrida",
        audience: "Fonoaudiólogos, educadores especiales",
        highlights: [
            "Detección temprana de dificultades",
            "Estrategias de intervención 0-3 años",
            "Trabajo con familias",
            "Plan de intervención individualizado",
        ],
    },
];
