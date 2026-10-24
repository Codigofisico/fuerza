export interface BonusItem {
  id: string;
  number: number;
  title: string;
  coverImage: string;
  description: string;
  highlightedBenefit: string;
}

export interface WeekPhase {
  week: number;
  title: string;
  focus: string;
  description: string;
  iconName: string;
}

export interface LearnItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const OFFICIAL_IMAGES = {
  mainBook: 'https://codigofisico.online/wp-content/uploads/2026/10/LIBRO-CODIGO-FUERZA-28.webp',
  bono1: 'https://codigofisico.online/wp-content/uploads/2026/10/BONO-1.webp',
  bono2: 'https://codigofisico.online/wp-content/uploads/2026/10/BONO-2.webp',
  bono3: 'https://codigofisico.online/wp-content/uploads/2026/10/BONO-3.webp',
  bono4: 'https://codigofisico.online/wp-content/uploads/2026/10/BONO-4.webp',
  bundleOffer: 'https://codigofisico.online/wp-content/uploads/2026/10/2-CHECKCOUNT-1.webp',
};

export interface BookContentPage {
  id: number;
  imageUrl: string;
  tag: string;
  title: string;
  description: string;
}

export const BOOK_CONTENT_PAGES: BookContentPage[] = [
  {
    id: 1,
    imageUrl: 'https://codigofisico.online/wp-content/uploads/2026/10/CONTENIDO-1.png',
    tag: 'Fase Inicial',
    title: 'Fundamentos y Biomecánica Básica',
    description: 'Bases mecánicas para entender el centro de gravedad, activación neuromuscular y control del propio peso.',
  },
  {
    id: 2,
    imageUrl: 'https://codigofisico.online/wp-content/uploads/2026/10/CONTENIDO-2.png',
    tag: 'Estructura',
    title: 'Planificación y Rutina Semanal',
    description: 'Desglose detallado de los bloques de trabajo, series, repeticiones y tiempos de descanso asignados.',
  },
  {
    id: 3,
    imageUrl: 'https://codigofisico.online/wp-content/uploads/2026/10/CONTENIDO-3.png',
    tag: 'Ejecución',
    title: 'Guía Anatómica de Movimientos',
    description: 'Ilustraciones claras de ángulos articulares seguros y trayectoria en sentadillas, flexiones y tracción.',
  },
  {
    id: 4,
    imageUrl: 'https://codigofisico.online/wp-content/uploads/2026/10/CONTENIDO-4.png',
    tag: 'Control Central',
    title: 'Estabilidad de Core y Planchas',
    description: 'Pautas de respiración diafragmática y contracción pélvica para proteger la columna y transferir fuerza.',
  },
  {
    id: 5,
    imageUrl: 'https://codigofisico.online/wp-content/uploads/2026/10/CONTENIDO-5.png',
    tag: 'Adaptabilidad',
    title: 'Regresiones y Variantes desde Cero',
    description: 'Cómo adaptar cada ejercicio si aún no puedes realizar una repetición estricta en el suelo.',
  },
  {
    id: 6,
    imageUrl: 'https://codigofisico.online/wp-content/uploads/2026/10/CONTENIDO-6.png',
    tag: 'Preparación',
    title: 'Calentamiento Dinámico y Movilidad',
    description: 'Secuencia de 5 a 8 minutos para acondicionar hombros, caderas y muñecas antes de entrenar.',
  },
  {
    id: 7,
    imageUrl: 'https://codigofisico.online/wp-content/uploads/2026/10/CONTENIDO-7.png',
    tag: 'Medición',
    title: 'Registro de Progreso y Evaluación',
    description: 'Plantillas para registrar tus marcas personales, repeticiones limpias y nivel de esfuerzo percibido.',
  },
  {
    id: 8,
    imageUrl: 'https://codigofisico.online/wp-content/uploads/2026/10/CONTENIDO-8.png',
    tag: 'Continuidad',
    title: 'Plan de Mantenimiento Post 28 Días',
    description: 'Estrategias probadas para consolidar el hábito y seguir progresando en calistenia sin estancarte.',
  },
];

export const BONUSES: BonusItem[] = [
  {
    id: 'bono-1',
    number: 1,
    title: 'MÉTODO ANTI EXCUSAS DIARIAS',
    coverImage: OFFICIAL_IMAGES.bono1,
    description:
      'Aprende estrategias prácticas para superar la procrastinación, facilitar el inicio del entrenamiento y mantener la constancia incluso en días ocupados.',
    highlightedBenefit: 'Menos excusas. Más acción.',
  },
  {
    id: 'bono-2',
    number: 2,
    title: 'RECUPERACIÓN ACTIVA Y EFICIENTE',
    coverImage: OFFICIAL_IMAGES.bono2,
    description:
      'Conoce la importancia de la movilidad, el descanso, la recuperación activa y las señales que debes observar para ajustar tus entrenamientos.',
    highlightedBenefit: 'Aprende a recuperar con inteligencia.',
  },
  {
    id: 'bono-3',
    number: 3,
    title: 'SISTEMA DE PROGRESO SIN FRUSTRACIÓN',
    coverImage: OFFICIAL_IMAGES.bono3,
    description:
      'Descubre cómo evaluar tu progreso mediante fuerza, resistencia, control corporal y constancia, sin depender únicamente de los cambios visibles.',
    highlightedBenefit: 'Aprende a reconocer tus avances.',
  },
  {
    id: 'bono-4',
    number: 4,
    title: 'NUTRICIÓN SIMPLE PARA FUERZA',
    coverImage: OFFICIAL_IMAGES.bono4,
    description:
      'Aprende principios básicos de nutrición, proteínas, carbohidratos, hidratación y organización de comidas para complementar tu entrenamiento.',
    highlightedBenefit: 'Alimentación simple para acompañar tu esfuerzo.',
  },
];

export const ROADMAP_WEEKS: WeekPhase[] = [
  {
    week: 1,
    title: 'SEMANA 1',
    focus: 'ADAPTACIÓN Y CONTROL',
    description:
      'Conoce los movimientos fundamentales y comienza a mejorar tu técnica y control corporal.',
    iconName: 'Compass',
  },
  {
    week: 2,
    title: 'SEMANA 2',
    focus: 'ESTABILIDAD Y CORE',
    description:
      'Trabaja la estabilidad, fortalece la zona central y aprende a ejecutar los movimientos con mayor control.',
    iconName: 'Shield',
  },
  {
    week: 3,
    title: 'SEMANA 3',
    focus: 'FUERZA Y RESISTENCIA',
    description:
      'Introduce progresiones y ejercicios de mayor intensidad, respetando tu capacidad y técnica.',
    iconName: 'Zap',
  },
  {
    week: 4,
    title: 'SEMANA 4',
    focus: 'POTENCIA Y CONFIANZA',
    description:
      'Consolida lo aprendido, realiza ejercicios más desafiantes y evalúa tu avance.',
    iconName: 'Trophy',
  },
];

export const WHAT_YOU_WILL_LEARN: LearnItem[] = [
  {
    id: 1,
    title: 'Fundamentos de calistenia',
    description: 'Los principios biomecánicos clave para entrenar usando tu propio peso como herramienta.',
    icon: 'Flame',
  },
  {
    id: 2,
    title: 'Técnica básica de flexiones y sentadillas',
    description: 'Alineación articular segura, rango de movimiento completo y progresiones desde nivel cero.',
    icon: 'Activity',
  },
  {
    id: 3,
    title: 'Ejercicios de plancha y estabilidad',
    description: 'Fortalecimiento de la faja abdominal, control lumbo-pélvico y postura firme.',
    icon: 'ShieldCheck',
  },
  {
    id: 4,
    title: 'Variantes de ejercicios de tracción',
    description: 'Opciones seguras adaptadas a apoyos domésticos para trabajar espalda y bíceps en casa.',
    icon: 'Layers',
  },
  {
    id: 5,
    title: 'Movilidad y preparación del cuerpo',
    description: 'Calentamiento dinámico y activación articular para entrenar sin molestias.',
    icon: 'RotateCw',
  },
  {
    id: 6,
    title: 'Organización de rutinas',
    description: 'Cómo estructurar tus días, series, descansos y frecuencia sin sobrecargarte.',
    icon: 'Calendar',
  },
  {
    id: 7,
    title: 'Cómo medir tu progreso',
    description: 'Métricas objetivas de repeticiones limpias, tiempo bajo tensión y consistencia semanal.',
    icon: 'TrendingUp',
  },
  {
    id: 8,
    title: 'Cómo mantener el hábito después del programa',
    description: 'Pautas claras para seguir avanzando por tu cuenta después del día 28.',
    icon: 'Award',
  },
];

export const TARGET_AUDIENCE = [
  'Quieres empezar a entrenar desde cero.',
  'Prefieres entrenar en casa.',
  'No tienes máquinas ni pesas.',
  'Necesitas una rutina estructurada.',
  'Quieres desarrollar fuerza progresivamente.',
  'Buscas construir un hábito sostenible.',
];

export const PROBLEM_POINTS = [
  'Quieres entrenar, pero no sabes por dónde comenzar.',
  'No tienes tiempo para desplazarte a un gimnasio.',
  'Crees que necesitas máquinas o pesas.',
  'Comienzas con motivación, pero te cuesta mantener el hábito.',
  'Pruebas ejercicios sin un orden claro.',
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Necesito ir al gimnasio?',
    answer: 'No. El programa está diseñado para realizarse en casa.',
  },
  {
    question: '¿Necesito comprar pesas o máquinas?',
    answer:
      'No necesitas pesas ni máquinas de gimnasio. Algunos ejercicios pueden utilizar apoyos domésticos firmes y seguros.',
  },
  {
    question: '¿Puedo comenzar si soy principiante?',
    answer:
      'Sí. El programa comienza con ejercicios fundamentales y avanza progresivamente. Es importante adaptar cada ejercicio a tu capacidad.',
  },
  {
    question: '¿Qué voy a recibir al comprar?',
    answer:
      'Recibirás el ebook Código Fuerza 28 y los cuatro bonos digitales incluidos en esta oferta.',
  },
  {
    question: '¿En qué formato viene el contenido?',
    answer: 'El material se entrega en formato digital PDF.',
  },
  {
    question: '¿Cómo recibo mi compra?',
    answer:
      'Después de que se apruebe el pago, Hotmart enviará las instrucciones de acceso al correo electrónico registrado. También podrás consultar la compra desde tu cuenta de Hotmart.',
  },
  {
    question: '¿Es un pago mensual?',
    answer: 'No. Es un pago único de $12 USD.',
  },
  {
    question: '¿Tengo garantía?',
    answer:
      'Sí. Tu compra cuenta con 7 días de garantía, conforme a las condiciones de Hotmart.',
  },
  {
    question: '¿Voy a obtener resultados físicos en 28 días?',
    answer:
      'El programa propone una progresión de cuatro semanas. Los resultados son individuales y dependen de factores como el punto de partida, la constancia, la alimentación y el descanso.',
  },
];
