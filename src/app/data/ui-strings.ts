import { LocalizedText } from '../core/i18n.service';

export const UI = {
  nav: {
    about: { es: 'Perfil', en: 'Profile' } as LocalizedText,
    skills: { es: 'Stack', en: 'Stack' } as LocalizedText,
    projects: { es: 'Proyectos', en: 'Projects' } as LocalizedText,
    education: { es: 'Educación', en: 'Education' } as LocalizedText,
    certifications: { es: 'Certificaciones', en: 'Certifications' } as LocalizedText,
    contact: { es: 'Contacto', en: 'Contact' } as LocalizedText,
  },
  hero: {
    eyebrow: { es: 'Disponible para nuevas oportunidades', en: 'Available for new opportunities' } as LocalizedText,
    ctaProjects: { es: 'Ver proyectos', en: 'View projects' } as LocalizedText,
    ctaContact: { es: 'Contactar', en: 'Get in touch' } as LocalizedText,
    ctaCvView: { es: 'Ver CV', en: 'View CV' } as LocalizedText,
    ctaCv: { es: 'Descargar CV', en: 'Download CV' } as LocalizedText,
  },
  about: {
    eyebrow: { es: '01 · Perfil', en: '01 · Profile' } as LocalizedText,
    title: { es: 'Sobre mí', en: 'About me' } as LocalizedText,
  },
  skills: {
    eyebrow: { es: '02 · Stack técnico', en: '02 · Technical stack' } as LocalizedText,
    title: { es: 'Con qué trabajo', en: 'What I work with' } as LocalizedText,
    lead: {
      es: 'Herramientas y tecnologías que uso día a día, organizadas como un esquema de datos.',
      en: 'Tools and technologies I use day to day, organized like a data schema.',
    } as LocalizedText,
  },
  projects: {
    eyebrow: { es: '03 · Proyectos', en: '03 · Projects' } as LocalizedText,
    title: { es: 'Proyectos destacados', en: 'Selected projects' } as LocalizedText,
    lead: {
      es: 'Sistemas reales en producción y proyectos académicos. Nombres de clientes omitidos por confidencialidad.',
      en: 'Real systems in production and academic projects. Client names omitted for confidentiality.',
    } as LocalizedText,
    viewSite: { es: 'Ver sitio', en: 'View site' } as LocalizedText,
  },
  education: {
    eyebrow: { es: '04 · Educación', en: '04 · Education' } as LocalizedText,
    title: { es: 'Formación', en: 'Education' } as LocalizedText,
  },
  certifications: {
    eyebrow: { es: '05 · Certificaciones', en: '05 · Certifications' } as LocalizedText,
    title: { es: 'Certificaciones y diplomados', en: 'Certifications & diplomas' } as LocalizedText,
    lead: {
      es: 'Formación complementaria en curso, enfocada en datos y bases de datos relacionales.',
      en: 'Complementary training in progress, focused on data and relational databases.',
    } as LocalizedText,
    inProgress: { es: 'En curso', en: 'In progress' } as LocalizedText,
    completed: { es: 'Completado', en: 'Completed' } as LocalizedText,
  },
  contact: {
    eyebrow: { es: '06 · Contacto', en: '06 · Contact' } as LocalizedText,
    title: { es: 'Hablemos', en: "Let's talk" } as LocalizedText,
    lead: {
      es: 'Estoy buscando oportunidades como Full Stack Developer (tiempo completo o freelance), abierto a trabajar de forma remota o reubicarme en cualquier país. Si mi perfil encaja con tu equipo o proyecto, escríbeme.',
      en: "I'm looking for Full Stack Developer opportunities (full-time or freelance), open to remote work or relocating to any country. If my profile fits your team or project, reach out.",
    } as LocalizedText,
    email: { es: 'Correo', en: 'Email' } as LocalizedText,
    dataVenture: { es: 'Análisis de Datos', en: 'Data Analytics' } as LocalizedText,
  },
  footer: {
    built: {
      es: 'Construido con Angular 20',
      en: 'Built with Angular 20',
    } as LocalizedText,
  },
};
