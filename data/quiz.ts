export type QuizQuestion = {
  id: string;
  case: string;
  options: string[];
  correctIndex: number;
  feedback: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "syllabus",
    case: "Un estudiante no entiende la estructura del curso.",
    options: ["Hacer la actividad", "Orientarlo en el syllabus", "Ignorarlo"],
    correctIndex: 1,
    feedback:
      "Correcto: el monitor orienta, no reemplaza al estudiante. El syllabus es la ruta base para entender propositos, actividades y evaluacion.",
  },
  {
    id: "late",
    case: "Una estudiante acumula dos actividades sin entregar y no responde en el foro.",
    options: [
      "Reportar el caso y proponer seguimiento",
      "Bajarle la nota",
      "Esperar hasta el cierre del curso",
    ],
    correctIndex: 0,
    feedback:
      "El seguimiento oportuno permite activar estrategias de permanencia y exito academico antes de que el riesgo aumente.",
  },
  {
    id: "tools",
    case: "Un grupo solicita apoyo para elegir herramientas digitales para organizar fuentes.",
    options: [
      "Recomendar una sola herramienta para todos",
      "Comparar opciones segun necesidad y criterios academicos",
      "Pedir que busquen tutoriales sin guia",
    ],
    correctIndex: 1,
    feedback:
      "La mejor orientacion conecta necesidad, criterio y herramienta. La decision debe ser consciente y aplicable.",
  },
  {
    id: "dobot",
    case: "Varios estudiantes preguntan lo mismo sobre canales institucionales.",
    options: [
      "Promover el uso de DOBOT y recursos oficiales",
      "Responder con informacion no verificada",
      "Crear un canal externo sin validacion",
    ],
    correctIndex: 0,
    feedback:
      "DOBOT y los canales oficiales reducen ruido, mejoran la trazabilidad y evitan informacion contradictoria.",
  },
];
