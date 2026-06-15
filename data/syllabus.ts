export type RoadmapStep = {
  id: string;
  title: string;
  description: string;
  outcome: string;
};

export const course = {
  title: "Herramientas Digitales para la Gestion del Conocimiento",
  purpose:
    "Fortalecer el uso critico, etico y estrategico de herramientas digitales para buscar, organizar, producir y compartir conocimiento en contextos academicos.",
  competencies: [
    "Selecciona herramientas digitales pertinentes segun la necesidad academica.",
    "Organiza informacion confiable y la transforma en productos de conocimiento.",
    "Aplica criterios de comunicacion digital, colaboracion y ciudadania responsable.",
  ],
  results: [
    "Reconoce recursos institucionales y digitales para apoyar su aprendizaje autonomo.",
    "Disena una estrategia personal de gestion del conocimiento.",
    "Comunica resultados usando herramientas digitales con claridad y rigor academico.",
  ],
};

export const roadmap: RoadmapStep[] = [
  {
    id: "01",
    title: "Explorar",
    description: "Leer el syllabus, identificar recursos y mapear los productos esperados.",
    outcome: "El estudiante comprende la estructura del curso.",
  },
  {
    id: "02",
    title: "Seleccionar",
    description: "Elegir herramientas de busqueda, organizacion y comunicacion digital.",
    outcome: "La herramienta responde al reto, no al reves.",
  },
  {
    id: "03",
    title: "Construir",
    description: "Crear evidencias academicas con fuentes, colaboracion y trazabilidad.",
    outcome: "El producto demuestra gestion del conocimiento.",
  },
  {
    id: "04",
    title: "Compartir",
    description: "Socializar aprendizajes, recibir retroalimentacion y ajustar entregables.",
    outcome: "La mejora se basa en criterios verificables.",
  },
];
