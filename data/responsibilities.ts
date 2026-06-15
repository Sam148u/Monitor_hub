export type Responsibility = {
  id: "C" | "D" | "G" | "K" | "M";
  icon: "analysis" | "tracking" | "workshop" | "bot" | "support";
  title: string;
  description: string;
  example: string;
  objective: string;
  whatToObserve: string[];
  howToGuide: string[];
  whenToSupport: string[];
  visualExample: string;
  interactionTip: string;
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
    objective:
      "Entender qué parte del curso genera más dudas o desorientación y convertir ese hallazgo en una acción concreta.",
    whatToObserve: [
      "Picos de preguntas repetidas en foros o WhatsApp.",
      "Actividades que presentan mayor tasa de entrega tardía.",
      "Recursos poco claros o instrucciones confusas.",
    ],
    howToGuide: [
      "Resumir el problema en una frase simple para el equipo.",
      "Sugerir una microguía o mini ejemplo con lenguaje claro.",
      "Coordinar ajustes con el director cuando la dificultad sea estructural.",
    ],
    whenToSupport: [
      "Cuando una actividad se repite con dudas similares.",
      "Cuando el grupo necesita recuperar el hilo del contenido.",
      "Cuando el material de apoyo no está siendo suficiente.",
    ],
    visualExample: "Mapa de calor del curso: el punto rojo indica la actividad con más preguntas y el panel de apoyo muestra dónde intervenir primero.",
    interactionTip: "Invite a los asistentes a identificar, con una mirada rápida, qué bloque del curso se ve más confundido.",
  },
  {
    id: "D",
    icon: "tracking",
    title: "Seguimiento academico",
    description:
      "Acompanhar a estudiantes con estrategias que favorezcan la permanencia y el exito academico.",
    example:
      "Detectar estudiantes sin entregas, enviar una orientacion clara y sugerir una ruta de recuperacion.",
    objective:
      "Convertir el seguimiento en un acompañamiento cercano, medible y oportuno para evitar la deserción temprana.",
    whatToObserve: [
      "Estudiantes con entregas ausentes o atrasadas.",
      "Cambios en la participación en sesiones o actividades.",
      "Señales de frustración o desconexión en el grupo.",
    ],
    howToGuide: [
      "Hacer una llamada o mensaje breve con tono motivador.",
      "Ofrecer una ruta de recuperación con fechas claras.",
      "Registrar el seguimiento para mantener continuidad.",
    ],
    whenToSupport: [
      "Cuando el estudiante lleva varias semanas sin participación.",
      "Cuando se detecta riesgo de deserción o bajo rendimiento.",
      "Cuando el director requiere una recomendación de apoyo.",
    ],
    visualExample: "Una barra de progreso marca la evolución del estudiante: entrega, acompañamiento y plan de recuperación en tres pasos.",
    interactionTip: "Pida al público que imagine cómo una alerta temprana puede cambiar el resultado final del semestre.",
  },
  {
    id: "G",
    icon: "workshop",
    title: "Encuentros de apoyo",
    description:
      "Apoyar espacios sobre escritura, herramientas digitales, ingles y manejo de plataformas institucionales.",
    example:
      "Facilitar una sesion corta sobre busqueda academica, citacion y uso responsable de herramientas digitales.",
    objective:
      "Generar espacios breves y útiles para fortalecer habilidades que impactan directamente el rendimiento académico.",
    whatToObserve: [
      "Temas que aparecen con frecuencia en consultas de los estudiantes.",
      "Necesidades de escritura, herramientas digitales o idioma.",
      "Dificultades para usar plataformas institucionales.",
    ],
    howToGuide: [
      "Diseñar una sesión corta con un objetivo claro y un ejemplo práctico.",
      "Combinar explicación con práctica guiada de 5 a 10 minutos.",
      "Dejar recursos o ejercicios para reforzar en el momento oportuno.",
    ],
    whenToSupport: [
      "Cuando la dificultad aparece en un tema específico del curso.",
      "Cuando el grupo necesita repasar una herramienta o plataforma.",
      "Cuando se evidencia un bajo nivel de confianza en la comunicación escrita.",
    ],
    visualExample: "Un tablero de mini talleres: escritura, plataforma y herramientas digitales aparecen como pasos de una misma ruta de apoyo.",
    interactionTip: "Proponga a los asistentes que elijan cuál de estas tres áreas necesita más apoyo hoy.",
  },
  {
    id: "K",
    icon: "bot",
    title: "Promocion de DOBOT",
    description:
      "Promover el uso de DOBOT como canal de orientacion para resolver inquietudes frecuentes.",
    example:
      "Mostrar a un grupo como consultar DOBOT antes de escalar preguntas administrativas o tecnicas.",
    objective:
      "Reducir la carga repetitiva de preguntas y fortalecer el uso de canales de autoayuda.",
    whatToObserve: [
      "Preguntas que se repiten con frecuencia sobre fechas, procesos o rutas.",
      "Estudiantes que consultan a varios compañeros antes de buscar ayuda.",
      "Momentos de inicio de semana donde aparecen muchas dudas similares.",
    ],
    howToGuide: [
      "Mostrar cómo usar DOBOT para resolver dudas frecuentes en menos de dos minutos.",
      "Reforzar la consulta previa antes de buscar respuesta directa.",
      "Orientar a los estudiantes sobre cuándo escalar a apoyo humano.",
    ],
    whenToSupport: [
      "Cuando las dudas son repetitivas o muy comunes.",
      "Cuando el grupo necesita una respuesta rápida sin esperar un encuentro.",
      "Cuando la información institucional está disponible en el canal digital.",
    ],
    visualExample: "Un flujo en pantalla muestra: pregunta del estudiante → DOBOT → respuesta rápida → escalamiento si hace falta.",
    interactionTip: "Invite a la audiencia a comparar la velocidad de una respuesta automática versus una respuesta manual.",
  },
  {
    id: "M",
    icon: "support",
    title: "Apoyo VISAE",
    description:
      "Apoyar actividades adicionales solicitadas por VISAE, manteniendo comunicacion y evidencias claras.",
    example:
      "Registrar asistencia, hallazgos y acciones de mejora despues de una jornada de acompanamiento.",
    objective:
      "Asegurar que cada acción adicional tenga seguimiento, evidencia y valor para la comunidad académica.",
    whatToObserve: [
      "Actividades que requieren coordinación con VISAE o apoyo adicional.",
      "Necesidades de registro, asistencia o seguimiento de evidencias.",
      "Puntos de mejora detectados durante la jornada.",
    ],
    howToGuide: [
      "Mantener una agenda clara y un registro simple de asistencia.",
      "Documentar hallazgos y próximas acciones con lenguaje objetivo.",
      "Compartir evidencia útil para la retroalimentación institucional.",
    ],
    whenToSupport: [
      "Cuando una actividad exige coordinación extra con otra dependencia.",
      "Cuando se requiere evidencia escrita del acompañamiento realizado.",
      "Cuando el equipo necesita cerrar una acción de mejora.",
    ],
    visualExample: "Una tarjeta de seguimiento resume: asistencia, evidencia y mejora, como un tablero de control rápido.",
    interactionTip: "Pida al grupo que identifique qué evidencia haría más clara la acción realizada para otros actores.",
  },
];
