import { LocalizedText } from '../core/i18n.service';

export interface SkillGroup {
  id: string;
  label: LocalizedText;
  items: string[];
}

export interface ProjectCaseStudy {
  problem: LocalizedText;
  solution: LocalizedText;
  architecture: LocalizedText;
  results: LocalizedText;
  learnings: LocalizedText;
}

export interface Project {
  id: string;
  name: string;
  summary: LocalizedText;
  tags: string[];
  highlight: LocalizedText;
  liveUrl?: string;
  caseStudy: ProjectCaseStudy;
}

export interface EducationItem {
  id: string;
  period: string;
  title: LocalizedText;
  org: string;
  detail: LocalizedText;
  honor?: LocalizedText;
}

export interface CertificationModule {
  label: LocalizedText;
  status: 'in-progress' | 'completed' | 'upcoming';
  score?: string;
}

export interface CertificationItem {
  id: string;
  title: LocalizedText;
  org: string;
  status: 'in-progress' | 'completed';
  detail: LocalizedText;
  modules?: CertificationModule[];
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

  timezone: {
    es: 'UTC-6 (hora central)',
    en: 'UTC-6 (Central Time)',
  } as LocalizedText,

  yearsExperience: '5+',

  tagline: {
    es: 'Software empresarial que resiste la complejidad real del negocio — SaaS multi-tenant, integraciones ERP, flujos con exigencias de cumplimiento — combinado con una práctica de datos genuina que convierte los sistemas en herramientas de decisión.',
    en: 'Enterprise software that holds up under real business complexity — multi-tenant SaaS, ERP integrations, compliance-driven workflows — paired with a genuine data practice that turns systems into decision-making tools.',
  } as LocalizedText,

  summary: {
    es: 'Soy Desarrollador Full Stack con más de 5 años construyendo software empresarial de punta a punta — desde Clean Architecture y CQRS/MediatR en .NET 8, hasta frontends modernos en Angular, hasta los esquemas de SQL Server debajo de todo. La mayor parte de ese trabajo se ha entregado en sistemas regulados, multi-tenant o integrados a un ERP, donde equivocarse en las reglas de negocio sale caro: gestión de licitaciones, contabilidad multi-empresa, seguimiento de farmacovigilancia. Combino ese perfil de ingeniería con una práctica de datos genuina — Power BI/DAX, forecasting en Python, automatización de flujos — porque creo que el mejor software empresarial no solo ejecuta un proceso: le dice algo útil al negocio sobre sí mismo.',
    en: 'I’m a Full Stack Developer with 5+ years building enterprise software end to end — from Clean Architecture and CQRS/MediatR on .NET 8, to modern Angular front ends, to the SQL Server schemas underneath. Most of that work has shipped into regulated, multi-tenant, or ERP-integrated systems where getting the business rules wrong is expensive: tender management, multi-company accounting, pharmacovigilance tracking. I pair that engineering background with a genuine data practice — Power BI/DAX, Python forecasting, workflow automation — because I think the best enterprise software doesn’t just execute a process, it tells the business something useful about itself.',
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
    items: [
      '.NET 8',
      'Microservices',
      'Clean Architecture',
      'CQRS / MediatR',
      'Java / Spring Boot',
      'VB.NET',
      'REST APIs',
      'Unit & Integration Testing',
    ],
  },
  {
    id: 'frontend',
    label: { es: 'Frontend', en: 'Frontend' },
    items: [
      'Angular 20',
      'Signals',
      'Angular Material',
      'Native Federation',
      'TypeScript',
      'RxJS',
      'Ionic / Capacitor',
    ],
  },
  {
    id: 'data',
    label: { es: 'Datos & Business Intelligence', en: 'Data & Business Intelligence' },
    items: [
      'SQL Server',
      'Power BI',
      'DAX',
      'Vega / Deneb',
      'Python (pandas)',
      'ARIMA / SARIMA',
      'FastAPI',
    ],
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
    caseStudy: {
      problem: {
        es: 'Las pymes suelen tener los datos crudos para tomar mejores decisiones, pero no la capacidad interna para convertirlos en dashboards o pronósticos.',
        en: 'Small and mid-sized businesses often have the raw data to make better decisions but no in-house capacity to turn it into dashboards or forecasts.',
      },
      solution: {
        es: 'Construyo y opero un sitio propio que ofrece dashboards, reporting y análisis de datos a medida, dirigido a negocios que necesitan insight de nivel Power BI sin contratar un equipo de analítica completo.',
        en: 'I built and operate a standalone site offering dashboards, reporting, and tailored data analysis as a service, aimed at businesses that need Power BI-grade insight without hiring a full analytics team.',
      },
      architecture: {
        es: 'Sitio propio para la oferta de servicio, con el trabajo de entrega hecho en Power BI/DAX por cada cliente.',
        en: 'A standalone site for the service offering, with delivery work done in Power BI/DAX per client engagement.',
      },
      results: {
        es: 'Un emprendimiento activo y propio que opera independientemente de cualquier empleador — evidencia de que esto es una práctica, no una habilidad aislada.',
        en: 'A live, self-owned venture that operates independently of any single employer — proof this is a practice, not a one-off skill.',
      },
      learnings: {
        es: 'Llevar el lado de cara al cliente del trabajo de datos (alcance, entrega, expectativas) es una habilidad distinta a construir los dashboards en sí, y una que he tenido que desarrollar de forma deliberada.',
        en: 'Running the client-facing side of data work (scoping, delivery, expectations) is a different skill set from building the dashboards themselves, and one I’ve had to develop deliberately.',
      },
    },
  },
  {
    id: 'tenders',
    name: 'Tender & Bid Management Platform',
    summary: {
      es: 'Sistema para el ciclo completo de licitaciones del sector farmacéutico: detección de oportunidades, evaluación, adjudicación y facturación. Frontend en Angular con arquitectura de micro-frontends.',
      en: 'System covering the full tender lifecycle in the pharmaceutical sector: opportunity detection, evaluation, adjudication and billing. Angular frontend built as a micro-frontend architecture.',
    },
    tags: ['.NET 8', 'CQRS', 'Angular Material', 'Native Federation'],
    highlight: {
      es: 'Módulo de adjudicación y evaluación',
      en: 'Adjudication & evaluation module',
    },
    caseStudy: {
      problem: {
        es: 'Los procesos de licitación farmacéutica estaban dispersos en correos y hojas de cálculo — ningún sistema seguía una oportunidad desde su detección hasta la adjudicación y facturación, por lo que se perdían licitaciones o se evaluaban de forma inconsistente.',
        en: 'Pharma tender workflows were scattered across email threads and spreadsheets — no single system tracked an opportunity from detection through adjudication and billing, so bids were missed or evaluated inconsistently.',
      },
      solution: {
        es: 'Construí una plataforma de ciclo completo que cubre detección de oportunidades, evaluación, adjudicación y facturación, con un módulo dedicado para calificar y adjudicar ofertas según criterios del sector farmacéutico.',
        en: 'Built a full lifecycle platform covering opportunity detection, evaluation, adjudication, and billing, with a dedicated module for scoring and awarding bids against pharmaceutical-sector criteria.',
      },
      architecture: {
        es: 'Backend en .NET 8 con CQRS/MediatR para escalar lectura y escritura de forma independiente; frontend en Angular construido como micro-frontends con Native Federation, permitiendo desplegar los módulos de licitación, evaluación y facturación por separado.',
        en: '.NET 8 backend using CQRS/MediatR to keep read and write paths independently scalable; Angular frontend built as micro-frontends via Native Federation so the tender, evaluation, and billing modules can ship and deploy independently.',
      },
      results: {
        es: 'Le dio al equipo comercial una única fuente de verdad para cada licitación en curso, con las decisiones de adjudicación y su justificación registradas en el sistema en vez de perderse en un correo.',
        en: 'Gave the commercial team a single source of truth for every tender in flight, with adjudication decisions and their justification captured in the system instead of living in someone’s inbox.',
      },
      learnings: {
        es: 'Native Federation resolvió problemas reales de límites entre equipos (despliegues independientes), pero agregó complejidad real al versionado del design system compartido — valió la pena porque estos módulos sí tienen ritmos de release distintos.',
        en: 'Native Federation solved real team-boundary problems (independent deploys) but added real complexity to shared design-system versioning — worth it here because the modules genuinely have different release cadences.',
      },
    },
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
    caseStudy: {
      problem: {
        es: 'Los requisitos fiscales hondureños (CAI, ISV, ISR, RTN) exigían facturación y reportes fiscales conformes para cada cliente, pero mantener una base de código por cliente no escala más allá de un puñado de empresas.',
        en: 'Honduran fiscal requirements (CAI, ISV, ISR, RTN) meant every client needed compliant invoicing and tax reporting, but building one codebase per client doesn’t scale past a handful of customers.',
      },
      solution: {
        es: 'Diseñé una plataforma SaaS de contabilidad multi-tenant donde la lógica de cumplimiento fiscal es infraestructura compartida y no personalización por cliente — las empresas nuevas se incorporan sobre la misma base de código y el mismo esquema de datos.',
        en: 'Designed a multi-tenant SaaS accounting platform where fiscal compliance logic is shared infrastructure, not per-client customization — new companies onboard onto the same codebase and database schema.',
      },
      architecture: {
        es: 'API en .NET 8 con aislamiento de datos a nivel de tenant, SQL Server como almacenamiento y frontend en Angular consumiendo APIs REST con alcance por tenant.',
        en: '.NET 8 API with tenant isolation at the data layer, SQL Server backing store, Angular frontend consuming REST APIs scoped per tenant.',
      },
      results: {
        es: 'Redujo el costo de incorporar un cliente nuevo de "levantar un despliegue nuevo" a "aprovisionar un tenant" — la misma base de código hoy atiende a múltiples empresas con salida fiscal correcta y auditable.',
        en: 'Reduced the cost of onboarding a new client from "build a new deployment" to "provision a new tenant" — the same codebase now serves multiple companies with correct, auditable fiscal output.',
      },
      learnings: {
        es: 'Las decisiones de multi-tenancy (nivel de aislamiento, esquema por tenant vs. esquema compartido) son mucho más baratas de acertar en el diseño que de corregir después — la próxima vez llevaría esa conversación aún más temprano.',
        en: 'Multi-tenancy decisions (isolation level, schema-per-tenant vs. shared-schema) are much cheaper to get right at design time than to retrofit — I’d push that conversation even earlier next time.',
      },
    },
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
    caseStudy: {
      problem: {
        es: 'Los datos de ventas e inventario vivían en SAP Business One y SQL Server, pero la gerencia no tenía visión prospectiva — las decisiones de compra e inventario eran reactivas, basadas en lo que ya había pasado.',
        en: 'Sales and inventory data lived in SAP Business One and SQL Server, but leadership had no forward-looking view — decisions on purchasing and stock were reactive, based on what had already happened.',
      },
      solution: {
        es: 'Construí dashboards de Power BI con medidas DAX sobre los datos operativos, y los extendí con pipelines de forecasting de demanda ARIMA/SARIMA en Python, devolviendo los resultados vía Power Query y un servicio en FastAPI.',
        en: 'Built Power BI dashboards with DAX measures over the operational data, then extended them with ARIMA/SARIMA demand-forecasting pipelines in Python, feeding results back through Power Query and a FastAPI service.',
      },
      architecture: {
        es: 'SQL Server y SAP B1 como fuentes, Python (pandas, statsmodels) para la capa de forecasting, FastAPI para exponer las predicciones y Power BI/DAX como capa de consumo.',
        en: 'SQL Server + SAP B1 as sources, Python (pandas, statsmodels) for the forecasting layer, FastAPI to expose predictions, Power BI/DAX for the consumption layer.',
      },
      results: {
        es: 'Movió la planeación de inventario de reportes puramente históricos a pronósticos accionables que el equipo podía usar antes de un quiebre de stock o un sobre-stock, no después.',
        en: 'Moved inventory planning from purely historical reporting to forward-looking forecasts the team could act on before a stockout or overstock happened, not after.',
      },
      learnings: {
        es: 'Lo difícil no fueron los modelos ARIMA/SARIMA — fue devolver esos pronósticos a una herramienta (Power BI) en la que los stakeholders no técnicos ya confiaban y usaban a diario.',
        en: 'The hard part wasn’t the ARIMA/SARIMA models — it was getting forecast output back into a tool (Power BI) that non-technical stakeholders already trusted and used daily.',
      },
    },
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
    caseStudy: {
      problem: {
        es: 'Los reportes de eventos adversos a medicamentos necesitaban un rastro de auditoría defendible desde el reporte inicial hasta el cierre, con clasificación clara — una hoja de cálculo o un hilo de correos no resiste ese nivel de escrutinio.',
        en: 'Adverse drug event reports needed a defensible audit trail from initial report to closure, with clear classification — a spreadsheet or email chain doesn’t hold up to that kind of scrutiny.',
      },
      solution: {
        es: 'Construí un sistema web con un flujo de estados formal para registrar, clasificar y dar seguimiento a eventos adversos y reacciones a medicamentos, con trazabilidad completa del caso en cada paso.',
        en: 'Built a web system with a formal status workflow for registering, classifying, and tracking adverse events and drug reactions, with full case traceability at every step.',
      },
      architecture: {
        es: 'Backend en .NET 8, frontend en Angular, SQL Server para los datos del caso con transiciones de estado modeladas explícitamente en vez de inferidas por timestamps.',
        en: '.NET 8 backend, Angular frontend, SQL Server for case data with state transitions modeled explicitly rather than inferred from timestamps.',
      },
      results: {
        es: 'Cada caso tiene hoy un historial completo y consultable desde el reporte hasta la resolución — listo para auditoría por diseño, no reconstruido después del hecho.',
        en: 'Every case now has a complete, queryable history from report to resolution — audit-ready by construction instead of reconstructed after the fact.',
      },
      learnings: {
        es: 'Modelar el flujo como una máquina de estados explícita (en vez de una columna de estado con reglas ad-hoc) se pagó sola la primera vez que cumplimiento preguntó "cómo llegó este caso hasta aquí".',
        en: 'Modeling the workflow as an explicit state machine (vs. a status column with ad-hoc rules) paid for itself the first time compliance asked "how did this case get here."',
      },
    },
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
    caseStudy: {
      problem: {
        es: 'Los procesos internos del negocio solo existían en escritorio, así que el personal de campo o de planta no tenía forma de interactuar con ellos sin una laptop.',
        en: 'Internal business processes only existed on desktop, which meant field and floor staff had no way to interact with them without a laptop.',
      },
      solution: {
        es: 'Construí una app híbrida iOS/Android con Angular e Ionic/Capacitor, consumiendo una API en .NET 9, para extender esos procesos al móvil sin mantener bases de código nativas separadas.',
        en: 'Built a hybrid iOS/Android app with Angular and Ionic/Capacitor, consuming a .NET 9 API, to extend those processes to mobile without maintaining separate native codebases.',
      },
      architecture: {
        es: 'Una sola base de código Angular/Ionic compilada a iOS y Android nativo vía Capacitor, respaldada por una API REST en .NET 9 compartida con otros clientes.',
        en: 'Single Angular/Ionic codebase compiled to native iOS and Android via Capacitor, backed by a .NET 9 REST API shared with other clients.',
      },
      results: {
        es: 'Extendió los flujos internos al móvil con una sola base de código en vez de dos nativas, manteniendo paridad de funcionalidad entre plataformas por construcción.',
        en: 'Extended internal workflows to mobile with one codebase instead of two native ones, keeping feature parity between platforms by construction.',
      },
      learnings: {
        es: 'El modelo de web-view de Ionic/Capacitor es el trade-off correcto para apps internas de línea de negocio — los puntos donde tensionaría (APIs nativas pesadas, UI con mucha animación) nunca aparecieron en este caso de uso.',
        en: 'Ionic/Capacitor’s web-view model is the right tradeoff for internal line-of-business apps — the places it would strain (heavy native APIs, animation-heavy UI) never showed up in this use case.',
      },
    },
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
    caseStudy: {
      problem: {
        es: 'Las herramientas por defecto de SAP Business One no cubrían la renovación automática de tokens, auditoría de cambios de vendedor/división, ni un flujo usable de revaluación de precios — vacíos que finanzas y ventas resolvían manualmente.',
        en: 'SAP Business One’s default tooling didn’t cover automated token renewal, audit trails for salesperson/division changes, or a usable price revaluation workflow — gaps the finance and sales teams worked around manually.',
      },
      solution: {
        es: 'Construí integraciones en VB.NET contra el API/SDK de SAP B1: renovación automática de tokens para que las integraciones no fallaran en silencio, auditoría de reasignaciones de vendedor/división, y formularios de revaluación de precios con grids de DevExpress para ediciones masivas.',
        en: 'Built VB.NET integrations against the SAP B1 API/SDK: automated token renewal so integrations didn’t silently fail, audit logging for salesperson/division reassignments, and price revaluation forms with DevExpress grids for bulk edits.',
      },
      architecture: {
        es: 'Servicios en VB.NET conectados al DI API de SAP Business One, SQL Server para los logs de auditoría, grids de DevExpress WinForms para la herramienta de revaluación.',
        en: 'VB.NET services talking to the SAP Business One DI API, SQL Server for audit logs, DevExpress WinForms grids for the operator-facing revaluation tool.',
      },
      results: {
        es: 'Cerró un conjunto de workarounds manuales y propensos a error en el ERP con procesos automatizados y auditables — la expiración de tokens dejó de ser un ticket de soporte.',
        en: 'Closed a set of manual, error-prone ERP workarounds with automated, auditable processes — token expiry stopped being a support ticket.',
      },
      learnings: {
        es: 'Integrar contra el SDK de un ERP maduro implica tiempo real en documentación de proveedor y foros de soporte — hay que presupuestar ese costo de descubrimiento, no es tiempo perdido.',
        en: 'Integrating against a mature ERP’s SDK means spending real time in vendor documentation and support forums — budget for that discovery cost, it’s not wasted time.',
      },
    },
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
    caseStudy: {
      problem: {
        es: 'Un módulo web del sector salud/farmacéutico necesitaba una revisión de seguridad antes de que los stakeholders lo aprobaran, y los hallazgos debían comunicarse de forma que personas sin perfil de seguridad pudieran actuar sobre ellos.',
        en: 'A healthcare/pharma web module needed a security review before stakeholders would sign off on it, and needed findings communicated in a way non-security people could act on.',
      },
      solution: {
        es: 'Planifiqué y estructuré pruebas de penetración de caja negra y caja gris sobre el módulo, produciendo reportes con clasificación de severidad clara en vez de un volcado crudo de hallazgos.',
        en: 'Planned and structured black-box and gray-box penetration testing against the module, producing reports with clear severity classification instead of a raw findings dump.',
      },
      architecture: {
        es: 'Metodología de pruebas alineada a OWASP, hallazgos registrados y reportados con badges de severidad para que la priorización fuera inequívoca para el equipo que los corregía.',
        en: 'OWASP-aligned testing methodology, findings tracked and reported with severity badges to make triage unambiguous for the team fixing them.',
      },
      results: {
        es: 'Le dio al equipo una lista priorizada y accionable de hallazgos de seguridad en vez de un muro intimidante de output crudo de escaneo.',
        en: 'Gave the team a prioritized, actionable list of security findings instead of an intimidating wall of raw scan output.',
      },
      learnings: {
        es: 'El valor de un reporte de pentest está sobre todo en qué tan bien se prioriza y se comunica — encontrar el hallazgo es solo la mitad del trabajo; hacerlo accionable es la otra mitad.',
        en: 'A pentest report’s value is mostly in how well it’s triaged and communicated — finding the issue is only half the job; making it actionable is the other half.',
      },
    },
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
    caseStudy: {
      problem: {
        es: 'Ejercicio académico: dado un dataset de e-commerce, extraer un modelo predictivo usable y hacer su resultado legible para alguien sin perfil de ciencia de datos.',
        en: 'Academic exercise: given an e-commerce dataset, extract a usable predictive model and make its output legible to someone without a data science background.',
      },
      solution: {
        es: 'Apliqué la metodología CRISP-DM de principio a fin — desde comprensión del negocio hasta preparación de datos y modelado — construyendo un clasificador de árbol de decisión en Python y un dashboard interactivo en R Shiny para explorar sus resultados.',
        en: 'Applied the CRISP-DM methodology end to end — from business understanding through data prep to modeling — building a Decision Tree classifier in Python and an interactive dashboard in R Shiny to explore its output.',
      },
      architecture: {
        es: 'Python (scikit-learn) para el modelado, R Shiny como capa de presentación interactiva, notebooks de Jupyter para el análisis exploratorio.',
        en: 'Python (scikit-learn) for modeling, R Shiny for the interactive presentation layer, Jupyter notebooks for the exploratory analysis.',
      },
      results: {
        es: 'Un proyecto de ciencia de datos completo y presentable que llevó un dataset crudo hasta una herramienta interactiva que un revisor no técnico podía usar.',
        en: 'A complete, presentable data science project that took a raw dataset all the way to an interactive tool a non-technical reviewer could use.',
      },
      learnings: {
        es: 'La disciplina de CRISP-DM — insistir en comprender el negocio antes de tocar los datos — es fácil de saltarse bajo presión de tiempo académica, y es exactamente el paso que hace que el resultado de un modelo signifique algo.',
        en: 'CRISP-DM’s discipline — insisting on business understanding before touching data — is easy to skip under academic time pressure, and it’s exactly the step that makes a model’s result actually mean something.',
      },
    },
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
    honor: {
      es: 'Magna Cum Laude — Medalla de Plata',
      en: 'Magna Cum Laude — Silver Medal',
    },
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'dux-usap',
    title: {
      es: 'Diplomado en Data Science & Data Analytics',
      en: 'Data Science & Data Analytics Diploma',
    },
    org: 'DUX · USAP',
    status: 'in-progress',
    detail: {
      es: 'Diplomado de 6 módulos, uno por mes — finalización estimada: primera semana de septiembre de 2026.',
      en: '6-module diploma, one per month — expected completion: first week of September 2026.',
    },
    modules: [
      { label: { es: 'Fundamentos', en: 'Fundamentals' }, status: 'completed' },
      { label: { es: 'Estadística con Excel', en: 'Statistics with Excel' }, status: 'completed' },
      { label: { es: 'Programación en R', en: 'R Programming' }, status: 'completed' },
      { label: { es: 'Python', en: 'Python' }, status: 'completed' },
      {
        label: {
          es: 'KNIME — Inteligencia Artificial, Machine Learning y Deep Learning',
          en: 'KNIME — Artificial Intelligence, Machine Learning and Deep Learning',
        },
        status: 'in-progress',
      },
      { label: { es: 'Power BI', en: 'Power BI' }, status: 'upcoming' },
    ],
  },
  {
    id: 'oracle',
    title: { es: 'Certificación Dual de Oracle SQL', en: 'Oracle SQL Dual Certification' },
    org: 'INFOP · Oracle Academy',
    status: 'in-progress',
    detail: {
      es: 'Doble certificación Oracle Academy / INFOP.',
      en: 'Dual certification, Oracle Academy / INFOP.',
    },
    modules: [
      {
        label: { es: 'Curso 1 — Database Foundations', en: 'Course 1 — Database Foundations' },
        status: 'completed',
        score: '93%',
      },
      {
        label: { es: 'Curso 2 — Diseño de Bases de Datos', en: 'Course 2 — Database Design' },
        status: 'completed',
        score: '95.8%',
      },
      {
        label: {
          es: 'Curso 3 — Modelado ER, notación Barker, normalización',
          en: 'Course 3 — ER modeling, Barker notation, normalization',
        },
        status: 'in-progress',
      },
    ],
  },
  {
    id: 'cisco-python-linux',
    title: {
      es: 'Python Essentials 1 y 2 + Linux Unhatched',
      en: 'Python Essentials 1 & 2 + Linux Unhatched',
    },
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
    title: {
      es: 'Desarrollo Mobile & Web (Flutter, Angular y más)',
      en: 'Mobile & Web Development (Flutter, Angular & more)',
    },
    org: 'Udemy',
    status: 'completed',
    detail: {
      es: 'Formación autodidacta en desarrollo mobile y web; los más destacados son Flutter y Angular.',
      en: 'Self-directed mobile and web development training; the most notable ones are Flutter and Angular.',
    },
  },
];
