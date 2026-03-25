export type Lang = 'es' | 'en'

export const t = {
  nav: {
    about:      { es: 'Sobre mí',    en: 'About'      },
    skills:     { es: 'Habilidades', en: 'Skills'     },
    projects:   { es: 'Proyectos',   en: 'Projects'   },
    experience: { es: 'Experiencia', en: 'Experience' },
    cv:         { es: 'CV',          en: 'CV'         },
    contact:    { es: 'Contacto',    en: 'Contact'    },
  },

  hero: {
    title: {
      es: 'Junior Data Analyst & Data Scientist',
      en: 'Junior Data Analyst & Data Scientist',
    },
    bio: {
      es: 'Ingeniero en Sistemas Computacionales con Maestría en Ciencia de Datos en curso (UAT). Más de 3 años de experiencia real aplicando Python, SQL y Machine Learning a problemas del mundo real.',
      en: "Computer Systems Engineer pursuing a Master's in Data Science (UAT). 3+ years of hands-on experience applying Python, SQL, and Machine Learning to real-world problems.",
    },
    cta1: { es: 'Ver Proyectos',  en: 'View Projects' },
    cta2: { es: 'Descargar CV',   en: 'Download CV'   },
  },

  about: {
    title: { es: 'Sobre mí', en: 'About Me' },
    p1: {
      es: 'Soy Jose Eliuth Torres Ortiz, Ingeniero en Sistemas Computacionales egresado del Instituto Tecnológico de Ciudad Victoria (TEC NM). Actualmente curso el 5.° semestre de la Maestría en Ciencia e Ingeniería de Datos en la Universidad Autónoma de Tamaulipas (UAT).',
      en: "I'm Jose Eliuth Torres Ortiz, a Computer Systems Engineer from Instituto Tecnológico de Ciudad Victoria (TEC NM). I'm currently in my 5th semester of a Master's in Data Science and Engineering at Universidad Autónoma de Tamaulipas (UAT).",
    },
    p2: {
      es: 'Cuento con más de 3 años de experiencia real en análisis de datos, automatización de reportes y visualización ejecutiva en el sector público. Estoy basado en Ciudad Victoria, Tamaulipas, y busco mi primera oportunidad formal en el área de datos o ciencia de datos.',
      en: 'I have 3+ years of real-world experience in data analysis, reporting automation, and executive visualization in the public sector. Based in Ciudad Victoria, Tamaulipas, I am actively looking for my first formal role in data analytics or data science.',
    },
    stats: [
      { value: '3+',  label: { es: 'Años de experiencia', en: 'Years of experience' } },
      { value: '4',   label: { es: 'Proyectos en producción', en: 'Production projects' } },
      { value: '5.°', label: { es: 'Semestre de Maestría', en: 'Master\'s semester' } },
    ],
  },

  skills: {
    title: { es: 'Habilidades Técnicas', en: 'Technical Skills' },
    list: [
      { name: 'Python',             color: '#3776AB', bg: 'rgba(55,118,171,0.18)', letter: 'Py'  },
      { name: 'SQL',                color: '#336791', bg: 'rgba(51,103,145,0.18)', letter: 'SQL' },
      { name: 'Power BI',           color: '#F2C811', bg: 'rgba(242,200,17,0.15)', letter: 'BI'  },
      { name: 'PostgreSQL',         color: '#4169E1', bg: 'rgba(65,105,225,0.18)', letter: 'PG'  },
      { name: 'Streamlit',          color: '#FF4B4B', bg: 'rgba(255,75,75,0.15)',  letter: 'St'  },
      { name: 'Pandas',             color: '#a78bfa', bg: 'rgba(167,139,250,0.15)',letter: 'Pd'  },
      { name: 'Scikit-Learn',       color: '#F7931E', bg: 'rgba(247,147,30,0.15)', letter: 'SK'  },
      { name: 'Git',                color: '#F05032', bg: 'rgba(240,80,50,0.15)',  letter: 'Git' },
      { name: 'GitHub',             color: '#94a3b8', bg: 'rgba(148,163,184,0.12)',letter: 'GH'  },
      { name: 'ETL',                color: '#3b82f6', bg: 'rgba(59,130,246,0.15)', letter: 'ETL' },
      { name: 'Machine Learning',   color: '#10B981', bg: 'rgba(16,185,129,0.15)', letter: 'ML'  },
      { name: 'OWL / Semantic Web', color: '#a78bfa', bg: 'rgba(167,139,250,0.15)',letter: 'OWL' },
    ],
  },

  projects: {
    title:      { es: 'Proyectos',       en: 'Projects'        },
    viewGithub: { es: 'Ver en GitHub',   en: 'View on GitHub'  },
    items: [
      {
        id: 'heart',
        name: 'Predict-Heart',
        badge: { es: 'Producción', en: 'Production' },
        desc: {
          es: 'Aplicación web de predicción de riesgo cardíaco desplegada en producción. Implementa 4 modelos de ML (regresión logística, árboles de decisión, SVM y redes neuronales) con pipeline completo de datos, ingeniería de características y evaluación de métricas (accuracy, F1, AUC).',
          en: 'Production-deployed cardiac risk prediction web app. Implements 4 ML models (logistic regression, decision trees, SVM, neural networks) with a full pipeline: data cleaning, feature engineering, and metrics evaluation (accuracy, F1, AUC).',
        },
        tags: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas'],
        github: 'https://github.com/inter097',
      },
      {
        id: 'spotify',
        name: 'Spotify ETL Pipeline',
        badge: { es: 'Ingeniería de Datos', en: 'Data Engineering' },
        desc: {
          es: 'Arquitectura ETL automatizada y escalable que extrae datos de la API de Spotify, los transforma para garantizar completitud y consistencia, los almacena en PostgreSQL y los expone en dashboards interactivos de Power BI.',
          en: 'Automated and scalable ETL architecture that extracts data from the Spotify API, transforms it for completeness and consistency, stores it in PostgreSQL, and exposes it through interactive Power BI dashboards.',
        },
        tags: ['Python', 'API REST', 'PostgreSQL', 'Power BI', 'ETL'],
        github: 'https://github.com/inter097',
      },
      {
        id: 'evo',
        name: 'EvoNeuroGraph',
        badge: { es: 'Investigación', en: 'Research' },
        desc: {
          es: 'Framework de Tesis de Maestría que combina Algoritmos Genéticos y Web Semántica (OWL, SWRL, Protégé) para el descubrimiento automático de reglas clínicas a partir de datos bioinformáticos no estructurados.',
          en: "Master's thesis research framework combining Genetic Algorithms and Semantic Web technologies (OWL, SWRL, Protégé) for automatic discovery of clinical rules from unstructured bioinformatics data.",
        },
        tags: ['Python', 'Algoritmos Genéticos', 'OWL', 'SWRL', 'Protégé'],
        github: 'https://github.com/inter097',
      },
    ],
  },

  experience: {
    title:   { es: 'Experiencia',   en: 'Experience'   },
    present: { es: 'Actualidad',    en: 'Present'      },
    role:    {
      es: 'Analista de Datos y Técnica en Sistemas',
      en: 'Data Analyst & Systems Technician',
    },
    company: {
      es: 'Secretaría de Seguridad Pública de Tamaulipas (SSPT)',
      en: 'Secretaría de Seguridad Pública de Tamaulipas (SSPT)',
    },
    period:  { es: 'Sep. 2021 – Abr. 2024', en: 'Sep. 2021 – Apr. 2024' },
    bullets: [
      {
        es: 'Desarrollé una aplicación móvil con App Sheet para actualización de datos en tiempo real, consolidando información operativa de múltiples municipios.',
        en: 'Built a mobile app with App Sheet for real-time data updates, consolidating operational data from multiple municipalities.',
      },
      {
        es: 'Construí dashboards y reportes en Power BI con mapas geográficos del estado de fuerza para decisiones ejecutivas de alto nivel.',
        en: 'Built Power BI dashboards with geographic force-status maps for high-level executive decision-making.',
      },
      {
        es: 'Automaticé flujos de estadísticas operacionales con Python y SQL, reduciendo tiempos de generación de reportes y garantizando integridad de los datos.',
        en: 'Automated operational statistics workflows with Python and SQL, reducing report generation time and ensuring data integrity.',
      },
      {
        es: 'Administré infraestructura de cámaras de seguridad en múltiples sedes (Camargo, Reynosa, Ciudad Victoria) mediante monitoreo basado en datos.',
        en: 'Managed security camera infrastructure across multiple locations (Camargo, Reynosa, Ciudad Victoria) through data-driven monitoring.',
      },
      {
        es: 'Generé presentaciones ejecutivas de métricas operativas para la Dirección de Operaciones.',
        en: 'Generated executive operational metrics presentations for the Director of Operations.',
      },
    ],
  },

  cvSection: {
    title: { es: 'Currículum Vitae', en: 'Resume / CV' },
    desc: {
      es: 'Descarga mi CV actualizado con toda mi experiencia, habilidades y proyectos en datos.',
      en: 'Download my up-to-date resume with my full experience, skills, and data projects.',
    },
    btn: { es: 'Descargar CV (PDF)', en: 'Download CV (PDF)' },
  },

  contact: {
    title: { es: 'Contacto', en: 'Contact' },
    desc: {
      es: '¿Tienes un proyecto o una oportunidad en datos? Hablemos.',
      en: "Have a data project or opportunity in mind? Let's talk.",
    },
  },

  footer: {
    rights: {
      es: 'Todos los derechos reservados.',
      en: 'All rights reserved.',
    },
  },
} as const
