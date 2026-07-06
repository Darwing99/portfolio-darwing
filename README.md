# Portafolio — Darwing Hernández Castellanos

Portafolio personal construido con **Angular 20** (standalone components, signals), bilingüe (ES/EN), tema oscuro minimalista. Pensado para aplicar a oportunidades como Full Stack Developer a nivel internacional.

## Antes de publicar — checklist

Editá `src/app/data/profile.data.ts` y reemplazá:

- [x] `email` — darwing.hernandezhn@gmail.com
- [x] `linkedin` — linkedin.com/in/darwing-rodilso-hernandez-castellanos-95825a248
- [x] `github` — github.com/darwing99
- [x] `cvUrl` / `cvViewUrl` — CV real en `public/cv-darwing-hernandez-{es,en}.pdf` (descarga) y `.html` (vista previa en el navegador)
- [ ] Revisá los textos de `PROJECTS` — están redactados de forma genérica (sin nombrar al empleador). Ajustalos si querés dar más detalle.
- [ ] `public/favicon.svg` — opcional, podés reemplazarlo por tu propio ícono

## Desarrollo local

```bash
npm install
npm start
```

Abre `http://localhost:4200`.

## Build de producción

```bash
npm run build
```

El resultado queda en `dist/portfolio/browser`.

## Despliegue a GitHub Pages (automático)

Este repo incluye `.github/workflows/deploy.yml`, que compila y publica el sitio en GitHub Pages cada vez que hacés push a `main`.

Pasos para activarlo:

1. Sube este proyecto a un repositorio de GitHub (por ejemplo `portfolio`).
2. En GitHub: **Settings → Pages → Source**, selecciona **GitHub Actions**.
3. Haz push a `main` — el workflow compila con el `base-href` correcto según el nombre de tu repositorio y publica automáticamente.
4. Tu sitio quedará disponible en `https://<tu-usuario>.github.io/<nombre-del-repo>/`.

No necesitas configurar `base-href` a mano: el workflow lo calcula automáticamente a partir del nombre del repositorio.

## Estructura

```
src/app/
  core/            → I18nService (ES/EN por signal) y directiva de scroll-reveal
  data/            → contenido del portafolio y strings de UI (bilingües)
  components/      → navbar, schema-rail, hero, about, skills, projects, education, contact, footer
```

## Idioma

El switch ES/EN está en el navbar. La preferencia se guarda en `localStorage` y se detecta automáticamente el idioma del navegador en la primera visita.
