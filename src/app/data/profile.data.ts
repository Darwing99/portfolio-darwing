import { LocalizedText } from '../core/i18n.service';

export interface SkillGroup {
  id: string;
  label: LocalizedText;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  summary: LocalizedText;
  tags: string[];
  highlight: LocalizedText;
  liveUrl?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  title: LocalizedText;
  org: string;
  detail: LocalizedText;
}

export interface CertificationItem {
  id: string;
  title: LocalizedText;
  org: string;
  status: 'in-progress' | 'completed';
  detail: LocalizedText;
}

export const PROFILE = {
  name: 'Darwing Hernández Castellanos',
  location: 'Honduras',
  email: 'darwing.hernandezhn@gmail.com',
  linkedin: 'https://www.linkedin.com/in/darwing-rodilso-hernandez-castellanos-95825a248',
  github: 'https://github.com/darwing99',
  cvViewUrl: {
    es: 'assets/cv-darwing-hernandez-es.html',
    en: 'assets/cv-darwing-hernandez-en.html',
  } as LocalizedText,
  cvUrl: {
    es: 'assets/cv-darwing-hernandez-es.pdf',
    en: 'assets/cv-darwing-hernandez-en.pdf',
  } as LocalizedText,
  englishAcademyUrl: 'https://hn.linkedin.com/company/academiasilvermonthn',
  dataVentureUrl: 'https://darden-analitycs.netlify.app/',

  role: {
    es: 'Full Stack Developer · .NET & Angular · Data / BI',
    en: 'Full Stack Developer · .NET & Angular · Data / BI',
  } as LocalizedText,

  availability: {
    es: 'Abierto a reubicación internacional y proyectos freelance',
    en: 'Open to international relocation and freelance projects',
  } as LocalizedText,

  summary: {
    es: 'Desarrollador Full Stack con experiencia en arquitecturas .NET 8 (Clean Architecture, CQRS/MediatR) y Angular moderno, aplicadas a sistemas empresariales reales: licitaciones, contabilidad multi-tenant e integraciones ERP. Complemento el desarrollo con un fuerte perfil de datos — Power BI/DAX, forecasting y automatización — para construir software que no solo funciona, sino que también informa decisiones.',
    en: 'Full Stack Developer experienced in .NET 8 architectures (Clean Architecture, CQRS/MediatR) and modern Angular, applied to real enterprise systems: tenders, multi-tenant accounting and ERP integrations. I pair development with a strong data profile — Power BI/DAX, forecasting and automation — to build software that doesn\u2019t just work, but also informs decisions.',
  } as LocalizedText,

  currentFocus: {
    es: 'Explorando agentes de IA para acelerar el desarrollo. Meta actual: integrar un chatbot en Ionic sobre un servidor MCP en .NET 9.',
    en: 'Exploring AI agents to speed up development. Current goal: integrating an Ionic chatbot backed by an MCP server in .NET 9.',
  } as LocalizedText,

  currentlyLearning: {
    es: 'Actualmente cursando un diplomado de inglés en Academia Silvermont para inmersión diaria en el idioma.',
    en: 'Currently completing an English diploma at Academia Silvermont for daily language immersion.',
  } as LocalizedText,
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'backend',
    label: { es: 'Backend & Arquitectura', en: 'Backend & Architecture' },
    items: ['.NET 8', 'Microservices', 'Clean Architecture', 'CQRS / MediatR', 'Java / Spring Boot', 'VB.NET', 'REST APIs', 'Unit & Integration Testing'],
  },
  {
    id: 'frontend',
    label: { es: 'Frontend', en: 'Frontend' },
    items: ['Angular 20', 'Signals', 'Angular Material', 'Native Federation', 'TypeScript', 'RxJS', 'Ionic / Capacitor'],
  },
  {
    id: 'data',
    label: { es: 'Datos & Business Intelligence', en: 'Data & Business Intelligence' },
    items: ['SQL Server', 'Power BI', 'DAX', 'Vega / Deneb', 'Python (pandas)', 'ARIMA / SARIMA', 'FastAPI'],
  },
  {
    id: 'integrations',
    label: { es: 'Integraciones & Automatización', en: 'Integrations & Automation' },
    items: ['SAP Business One', 'RPA (Power Automate)', 'WhatsApp API', 'Webhooks'],
  },
  {
    id: 'tools',
    label: { es: 'Herramientas & Prácticas', en: 'Tools & Practices' },
    items: ['Git', 'SonarQube / Roslyn', 'CI/CD', 'Azure DevOps', 'AI Agents / MCP', 'R / Jupyter'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'data-analytics-venture',
    name: 'Data Analytics Services',
    summary: {
      es: 'Sitio propio para mi emprendimiento de análisis de datos: servicios de dashboards, reporting y análisis a medida para negocios que buscan tomar decisiones basadas en datos.',
      en: 'My own site for a data analytics venture: dashboards, reporting and tailored analysis services for businesses looking to make data-driven decisions.',
    },
    tags: ['Power BI', 'Data Analysis', 'Dashboards'],
    highlight: { es: 'Emprendimiento propio', en: 'Personal venture' },
    liveUrl: 'https://darden-analitycs.netlify.app/',
  },
  {
    id: 'tenders',
    name: 'Tender & Bid Management Platform',
    summary: {
      es: 'Sistema para el ciclo completo de licitaciones del sector farmacéutico: detección de oportunidades, evaluación, adjudicación y facturación. Frontend en Angular con arquitectura de micro-frontends.',
      en: 'System covering the full tender lifecycle in the pharmaceutical sector: opportunity detection, evaluation, adjudication and billing. Angular frontend built as a micro-frontend architecture.',
    },
    tags: ['.NET 8', 'CQRS', 'Angular Material', 'Native Federation'],
    highlight: { es: 'Módulo de adjudicación y evaluación', en: 'Adjudication & evaluation module' },
  },
  {
    id: 'accounting-saas',
    name: 'ContabilidadHN — Multi-Tenant Accounting SaaS',
    summary: {
      es: 'Plataforma SaaS de contabilidad multi-empresa adaptada a requisitos fiscales hondureños (CAI, ISV, ISR, RTN), pensada para escalar a múltiples clientes desde una sola base de código.',
      en: 'Multi-tenant accounting SaaS platform tailored to Honduran fiscal requirements (CAI, ISV, ISR, RTN), designed to scale to multiple clients from a single codebase.',
    },
    tags: ['.NET 8', 'SQL Server', 'Multi-tenant', 'Angular'],
    highlight: { es: 'Cumplimiento fiscal hondureño', en: 'Honduran fiscal compliance' },
  },
  {
    id: 'bi-forecasting',
    name: 'BI Forecasting & Inventory Dashboards',
    summary: {
      es: 'Dashboards de Power BI con medidas DAX avanzadas sobre datos de SQL Server y SAP Business One: análisis de ventas en el tiempo e inventarios que sustentan la toma de decisiones, complementados con pipelines de forecasting ARIMA/SARIMA en Python vía Power Query y FastAPI.',
      en: 'Power BI dashboards with advanced DAX measures over SQL Server and SAP Business One data: sales-over-time and inventory analysis that support decision-making, complemented with ARIMA/SARIMA forecasting pipelines in Python through Power Query and FastAPI.',
    },
    tags: ['Power BI', 'DAX', 'SQL Server', 'SAP B1', 'Python', 'FastAPI'],
    highlight: { es: 'Forecasting de demanda e inventario', en: 'Demand & inventory forecasting' },
  },
  {
    id: 'pharmacovigilance',
    name: 'Pharmacovigilance Tracking System',
    summary: {
      es: 'Sistema web para el registro, clasificación y seguimiento de eventos adversos y reacciones a medicamentos, con flujo de estados y trazabilidad del caso desde el reporte inicial hasta su cierre.',
      en: 'Web system for registering, classifying and tracking adverse events and drug reactions, with a status workflow and full case traceability from initial report to closure.',
    },
    tags: ['.NET 8', 'Angular', 'SQL Server'],
    highlight: { es: 'Seguimiento de eventos adversos', en: 'Adverse event tracking' },
  },
  {
    id: 'mobile-app',
    name: 'Enterprise Mobile App',
    summary: {
      es: 'Aplicación móvil híbrida para iOS/Android con Angular e Ionic/Capacitor, consumiendo una API en .NET 9, pensada para extender procesos empresariales internos al móvil.',
      en: 'Hybrid iOS/Android mobile app built with Angular and Ionic/Capacitor, consuming a .NET 9 API, designed to extend internal enterprise processes to mobile.',
    },
    tags: ['Angular', 'Ionic', 'Capacitor', '.NET 9'],
    highlight: { es: 'App híbrida iOS/Android', en: 'Hybrid iOS/Android app' },
  },
  {
    id: 'sap-integration',
    name: 'ERP Integration Suite (SAP Business One)',
    summary: {
      es: 'Integraciones VB.NET con SAP Business One: renovación automática de tokens, auditoría de cambios de vendedor/división y formularios de revaluación de precios con grids DevExpress.',
      en: 'VB.NET integrations with SAP Business One: automated token renewal, audit logging for salesperson/division changes, and price revaluation forms with DevExpress grids.',
    },
    tags: ['VB.NET', 'SAP B1', 'DevExpress', 'SQL Server'],
    highlight: { es: 'Automatización de procesos ERP', en: 'ERP process automation' },
  },
  {
    id: 'pentest',
    name: 'Web Application Security Assessment',
    summary: {
      es: 'Planificación de pruebas de penetración (caja negra y gris) para un módulo web del sector salud/farmacéutico, con reportes estructurados y clasificación de severidad de hallazgos.',
      en: 'Penetration testing planning (black-box and gray-box) for a healthcare/pharma web module, with structured reports and severity classification of findings.',
    },
    tags: ['Pentesting', 'OWASP', 'Reporting'],
    highlight: { es: 'Reportes con badges de severidad', en: 'Severity-badge findings reports' },
  },
  {
    id: 'data-science',
    name: 'Data Science Capstone',
    summary: {
      es: 'Proyecto académico de ciencia de datos con metodología CRISP-DM: modelo de árbol de decisión en Python y dashboard interactivo en R Shiny sobre un dataset de e-commerce.',
      en: 'Academic data science project using CRISP-DM methodology: a Decision Tree model in Python and an interactive R Shiny dashboard over an e-commerce dataset.',
    },
    tags: ['Python', 'R Shiny', 'CRISP-DM', 'Jupyter'],
    highlight: { es: 'Modelo de árbol de decisión', en: 'Decision Tree model' },
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'uth',
    period: '2017 — 2023',
    title: { es: 'Ingeniería en Computación', en: 'Computer Engineering' },
    org: 'Universidad Tecnológica de Honduras',
    detail: {
      es: 'Graduado Magna Cum Laude (Medalla de Plata).',
      en: 'Graduated Magna Cum Laude (Silver Medal).',
    },
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'dux-usap',
    title: { es: 'Diplomado en Data Science & Data Analytics', en: 'Data Science & Data Analytics Diploma' },
    org: 'DUX · USAP',
    status: 'in-progress',
    detail: {
      es: 'En curso — módulo 4 de 6 (uno por mes). Completados: Fundamentos, Estadística con Excel, Programación en R. Módulo actual: Python.',
      en: 'In progress — module 4 of 6 (one per month). Completed: Fundamentals, Statistics with Excel, R Programming. Current module: Python.',
    },
  },
  {
    id: 'oracle',
    title: { es: 'Certificación Dual de Oracle SQL', en: 'Oracle SQL Dual Certification' },
    org: 'INFOP · Oracle Academy',
    status: 'in-progress',
    detail: {
      es: 'Módulo 2 en curso, ya matriculado en el módulo 3. Incluye modelado ER, notación Barker, supertipos/subtipos y normalización.',
      en: 'Module 2 in progress, already enrolled in module 3. Covers ER modeling, Barker notation, supertypes/subtypes and normalization.',
    },
  },
  {
    id: 'cisco-python-linux',
    title: { es: 'Python Essentials 1 y 2 + Linux Unhatched', en: 'Python Essentials 1 & 2 + Linux Unhatched' },
    org: 'Cisco Networking Academy',
    status: 'completed',
    detail: {
      es: 'Fundamentos de programación en Python y primeros pasos con Linux (línea de comandos, sistema de archivos, permisos).',
      en: 'Python programming fundamentals and first steps with Linux (command line, file system, permissions).',
    },
  },
  {
    id: 'devtalles-n8n',
    title: { es: 'Automatización de flujos con n8n', en: 'Workflow Automation with n8n' },
    org: 'DevTalles · Fernando Herrera',
    status: 'completed',
    detail: {
      es: 'Curso de automatización de procesos y flujos de trabajo con n8n (integraciones, webhooks, nodos personalizados).',
      en: 'Process and workflow automation course with n8n (integrations, webhooks, custom nodes).',
    },
  },
  {
    id: 'udemy-mobile-web',
    title: { es: 'Desarrollo Mobile & Web (Flutter, Angular y más)', en: 'Mobile & Web Development (Flutter, Angular & more)' },
    org: 'Udemy',
    status: 'completed',
    detail: {
      es: 'Formación autodidacta en desarrollo mobile y web; los más destacados son Flutter y Angular.',
      en: 'Self-directed mobile and web development training; the most notable ones are Flutter and Angular.',
    },
  },
];
