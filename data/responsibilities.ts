export type Responsibility = {
  id: "C" | "D" | "G" | "K" | "M";
  icon: "analysis" | "tracking" | "workshop" | "bot" | "support";
  title: string;
  description: string;
  example: string;
};

export const responsibilities: Responsibility[] = [
  {
    id: "C",
    icon: "analysis",
    title: "Analisis del curso",
    description:
      "Apoyar al director con la lectura del manejo de contenidos, recursos y desarrollo de actividades.",
    example:
      "Revisar patrones de dudas frecuentes y proponer una microguia para orientar la actividad con mayor dificultad.",
  },
  {
    id: "D",
    icon: "tracking",
    title: "Seguimiento academico",
    description:
      "Acompanhar a estudiantes con estrategias que favorezcan la permanencia y el exito academico.",
    example:
      "Detectar estudiantes sin entregas, enviar una orientacion clara y sugerir una ruta de recuperacion.",
  },
  {
    id: "G",
    icon: "workshop",
    title: "Encuentros de apoyo",
    description:
      "Apoyar espacios sobre escritura, herramientas digitales, ingles y manejo de plataformas institucionales.",
    example:
      "Facilitar una sesion corta sobre busqueda academica, citacion y uso responsable de herramientas digitales.",
  },
  {
    id: "K",
    icon: "bot",
    title: "Promocion de DOBOT",
    description:
      "Promover el uso de DOBOT como canal de orientacion para resolver inquietudes frecuentes.",
    example:
      "Mostrar a un grupo como consultar DOBOT antes de escalar preguntas administrativas o tecnicas.",
  },
  {
    id: "M",
    icon: "support",
    title: "Apoyo VISAE",
    description:
      "Apoyar actividades adicionales solicitadas por VISAE, manteniendo comunicacion y evidencias claras.",
    example:
      "Registrar asistencia, hallazgos y acciones de mejora despues de una jornada de acompanamiento.",
  },
];
