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
      es: 'Data Analyst & Data Engineer',
      en: 'Data Analyst & Data Engineer',
    },
    bio: {
      es: 'Ingeniero en Sistemas Computacionales con Maestría en Ciencia e Ingeniería de Datos en curso (UAT). Más de 3 años de experiencia en análisis de datos, automatización de reportes operativos y desarrollo independiente de aplicaciones de ML en producción.',
      en: "Computer Systems Engineer pursuing a Master's in Data Science and Engineering (UAT). 3+ years of experience in data analysis, operational reporting, and independently building and deploying ML applications.",
    },
    cta1: { es: 'Ver Proyectos',  en: 'View Projects' },
    cta2: { es: 'Descargar CV', en: 'Download Resume' },
  },

  about: {
    title: { es: 'Sobre mí', en: 'About Me' },
    p1: {
      es: 'Mi camino hacia los datos empezó en la SSPT, donde vi de primera mano cómo la información correcta — entregada a tiempo — cambia la forma en que se toman decisiones a escala. Lo que empezó como un trabajo técnico se convirtió en una pasión real por construir sistemas que hacen que los datos sean accionables.',
      en: 'My path into data started at SSPT, where I saw firsthand how the right information — delivered at the right time — changes how decisions are made at scale. What started as a technical job turned into a genuine passion for building systems that make data actionable.',
    },
    p2: {
      es: 'Me atraen los problemas donde los datos son desordenados, los procesos son manuales y la oportunidad de automatizar es clara. Me gusta llevar las cosas hasta el despliegue: desde diseñar el flujo de datos hasta construir la app que lo hace visible. Disponible para posiciones remotas.',
      en: "I'm drawn to problems where data is messy, processes are manual, and the opportunity to automate is clear. I like to see things through to deployment — from designing the data flow to building the app that makes it visible. Available for remote positions.",
    },
    stats: [
      { value: '3+',  label: { es: 'Años de experiencia', en: 'Years of experience' } },
      { value: '2',   label: { es: 'Proyectos en producción', en: 'Production projects' } },
      { value: '43',  label: { es: 'Municipios impactados', en: 'Municipalities impacted' } },
    ],
  },

  skills: {
    title: { es: 'Habilidades Técnicas', en: 'Technical Skills' },
    groups: [
      {
        label: { es: 'Lenguajes', en: 'Languages' },
        items: [
          { name: 'Python',  color: '#3776AB', bg: 'rgba(55,118,171,0.18)',  letter: 'Py'  },
          { name: 'SQL',     color: '#336791', bg: 'rgba(51,103,145,0.18)',  letter: 'SQL' },
          { name: 'Java',    color: '#E76F00', bg: 'rgba(231,111,0,0.15)',   letter: 'Jv'  },
        ],
      },
      {
        label: { es: 'Datos & Bases de Datos', en: 'Data & Databases' },
        items: [
          { name: 'PostgreSQL',   color: '#4169E1', bg: 'rgba(65,105,225,0.18)',  letter: 'PG'  },
          { name: 'ETL',          color: '#3b82f6', bg: 'rgba(59,130,246,0.15)',  letter: 'ETL' },
          { name: 'Pandas',       color: '#a78bfa', bg: 'rgba(167,139,250,0.15)', letter: 'Pd'  },
          { name: 'Google Sheets',color: '#34A853', bg: 'rgba(52,168,83,0.15)',   letter: 'GS'  },
        ],
      },
      {
        label: { es: 'Visualización', en: 'Visualization' },
        items: [
          { name: 'Power BI',  color: '#F2C811', bg: 'rgba(242,200,17,0.15)', letter: 'BI' },
          { name: 'Streamlit', color: '#FF4B4B', bg: 'rgba(255,75,75,0.15)',  letter: 'St' },
        ],
      },
      {
        label: { es: 'ML & NLP', en: 'ML & NLP' },
        items: [
          { name: 'Scikit-Learn',     color: '#F7931E', bg: 'rgba(247,147,30,0.15)',  letter: 'SK' },
          { name: 'Machine Learning', color: '#10B981', bg: 'rgba(16,185,129,0.15)',  letter: 'ML' },
          { name: 'Hugging Face',     color: '#FFD21E', bg: 'rgba(255,210,30,0.15)',  letter: 'HF' },
          { name: 'spaCy',            color: '#09A3D5', bg: 'rgba(9,163,213,0.15)',   letter: 'sp' },
          { name: 'NLTK',             color: '#10B981', bg: 'rgba(16,185,129,0.15)',  letter: 'NL' },
          { name: 'OWL / Semantic Web',color: '#a78bfa',bg: 'rgba(167,139,250,0.15)',letter: 'OWL'},
        ],
      },
      {
        label: { es: 'Web & Apps', en: 'Web & Apps' },
        items: [
          { name: 'Flask',       color: '#94a3b8', bg: 'rgba(148,163,184,0.12)', letter: 'Fl' },
          { name: 'Docker',      color: '#2496ED', bg: 'rgba(36,150,237,0.15)',  letter: 'Dk' },
          { name: 'Firebase',    color: '#FFCA28', bg: 'rgba(255,202,40,0.15)',  letter: 'Fb' },
          { name: 'AppSheet',    color: '#1A73E8', bg: 'rgba(26,115,232,0.15)',  letter: 'AS' },
          { name: 'Web Scraping',color: '#a78bfa', bg: 'rgba(167,139,250,0.15)', letter: 'WS' },
        ],
      },
      {
        label: { es: 'Herramientas', en: 'Tools' },
        items: [
          { name: 'Git',            color: '#F05032', bg: 'rgba(240,80,50,0.15)',   letter: 'Git' },
          { name: 'GitHub',         color: '#94a3b8', bg: 'rgba(148,163,184,0.12)', letter: 'GH'  },
          { name: 'Jupyter Notebook',color: '#F37626',bg: 'rgba(243,118,38,0.15)',  letter: 'Jn'  },
          { name: 'Google Colab',   color: '#F9AB00', bg: 'rgba(249,171,0,0.15)',   letter: 'GC'  },
          { name: 'Linux',          color: '#FCC624', bg: 'rgba(252,198,36,0.15)',  letter: 'Lx'  },
        ],
      },
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
          es: 'Proyecto de Maestría desplegado en producción. Aplicación web de predicción de riesgo cardíaco que implementa 6 modelos de ML (Logistic Regression, Naive Bayes, KNN, Decision Tree, SVM y MLP Neural Network) más un ensamble final, con pipeline completo de datos, ingeniería de características y métricas (accuracy, F1, AUC).',
          en: "Master's project deployed in production. Cardiac risk prediction web app implementing 6 ML models (Logistic Regression, Naive Bayes, KNN, Decision Tree, SVM, and MLP Neural Network) plus a final ensemble, with a full pipeline: data cleaning, feature engineering, and metrics evaluation (accuracy, F1, AUC).",
        },
        tags: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas'],
        github: 'https://github.com/inter097/predict-heart',
        demo: 'https://predict-heart.streamlit.app/',
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
        github: 'https://github.com/inter097/spotify-etl-analytics',
      },
      {
        id: 'ontology',
        name: 'Neonatal Epilepsy Ontology',
        badge: { es: 'Investigación', en: 'Research' },
        desc: {
          es: 'Modelo ontológico para la inferencia temprana de síndromes epilépticos neonatales, desarrollado como parte de la Maestría en la UAT. Combina OWL, SWRL y Protégé para representar conocimiento clínico y aplicar razonamiento semántico sobre datos bioinformáticos.',
          en: "Ontological model for early inference of neonatal epileptic syndromes, developed as part of the Master's research at UAT. Combines OWL, SWRL, and Protégé to represent clinical knowledge and apply semantic reasoning over bioinformatics data.",
        },
        tags: ['OWL', 'SWRL', 'Protégé', 'Python', 'Semantic Web'],
        github: 'https://github.com/inter097/epilepsia-cdss',
      },
    ],
  },

  experience: {
    title:   { es: 'Experiencia', en: 'Experience' },
    jobs: [
      {
        role:    { es: 'Proyectos Independientes & Maestría en Datos', en: "Independent Projects & Master's in Data Science" },
        company: { es: 'UAT · Proyectos Personales', en: 'UAT · Self-directed' },
        period:  { es: 'Abr. 2024 – Actualidad', en: 'Apr. 2024 – Present' },
        current: true,
        bullets: [
          {
            es: 'Cursando el 5.° semestre de la Maestría en Ciencia e Ingeniería de Datos en la UAT, con enfoque en Machine Learning aplicado y Web Semántica.',
            en: "Pursuing the 5th semester of a Master's in Data Science and Engineering at UAT, focused on applied Machine Learning and Semantic Web.",
          },
          {
            es: 'Desarrollé y desplegué de forma independiente Predict-Heart, aplicación web de predicción de riesgo cardíaco con 6 modelos de ML y ensamble final.',
            en: 'Independently built and deployed Predict-Heart, a cardiac risk prediction web app with 6 ML models and a final ensemble.',
          },
          {
            es: 'Construí un pipeline ETL completo extrayendo datos de la API de Spotify, transformándolos y almacenándolos en PostgreSQL con visualizaciones en Power BI.',
            en: 'Built a full ETL pipeline extracting data from the Spotify API, transforming and storing it in PostgreSQL with Power BI dashboards.',
          },
          {
            es: 'Desarrollé un modelo ontológico para la inferencia temprana de síndromes epilépticos neonatales usando OWL, SWRL y Protégé como parte de la tesis de Maestría.',
            en: "Developed an ontological model for early inference of neonatal epileptic syndromes using OWL, SWRL, and Protégé as part of the Master's thesis.",
          },
        ],
      },
      {
        role:    { es: 'Analista de Datos y Técnico en Sistemas', en: 'Data Analyst & Systems Technician' },
        company: { es: 'Secretaría de Seguridad Pública de Tamaulipas (SSPT)', en: 'Secretaría de Seguridad Pública de Tamaulipas (SSPT)' },
        period:  { es: 'Sep. 2021 – Abr. 2024 · 2 años 7 meses', en: 'Sep. 2021 – Apr. 2024 · 2 years 7 months' },
        current: false,
        bullets: [
          {
            es: 'Diseñé e implementé desde cero un sistema de reporte operativo diario (Google Sheets + AppSheet) que reemplazó la captura manual de datos, entregando el estado de fuerza de 43 municipios.',
            en: 'Designed and implemented from scratch a daily operational reporting system (Google Sheets + AppSheet) that replaced manual data capture, delivering the force status of 43 municipalities.',
          },
          {
            es: 'Estructuré el flujo de datos desde 11 fuentes independientes hacia un sistema centralizado en Google Sheets, garantizando consistencia y entrega automatizada con cadencia diaria.',
            en: 'Structured the data flow from 11 independent sources into a centralized Google Sheets system, ensuring data consistency and automated daily delivery.',
          },
          {
            es: 'Desarrollé una aplicación móvil en AppSheet con directorio de encargados por municipio, permitiendo acceso al contacto y situación real del personal con actualizaciones en tiempo real.',
            en: 'Developed a mobile application in AppSheet with a directory of municipal coordinators, providing real-time access to contact information and personnel status.',
          },
          {
            es: 'Propuse y lideré la migración de múltiples registros operativos desde reportes manuales en Word/PDF a un sistema centralizado en Excel, automatizando la generación de visualizaciones y eliminando horas de captura diaria.',
            en: 'Proposed and led the migration of multiple operational records from manual Word/PDF reports to a centralized Excel system, automating the generation of visualizations and eliminating hours of daily manual entry.',
          },
          {
            es: 'El sistema fue replicado en otra área de la institución, mejorando los tiempos de reporte y eliminando procesos manuales, capacitando al personal involucrado para su correcta implementación.',
            en: 'The system was replicated in another area of the institution, improving reporting times and eliminating manual processes, training the staff involved for correct implementation.',
          },
        ],
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
