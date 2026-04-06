# Portfolio de Eliuth Torres — CLAUDE.md

## Proyecto
Portafolio personal de Jose Eliuth Torres Ortiz, desplegado en Vercel.

- **URL producción:** https://eliuth-torres.vercel.app/
- **Repo GitHub:** https://github.com/inter097/portafolio

## Stack
- Next.js 16 + React 18 + TypeScript
- Tailwind CSS
- Vercel Analytics

## Comandos
```bash
npm run dev    # desarrollo local
npm run build  # build de producción
npm run lint   # linter
```

## Estructura
```
app/           # página principal (page.tsx, layout.tsx)
components/    # secciones del portafolio
  Hero.tsx
  Navbar.tsx
  About.tsx
  Skills.tsx
  Projects.tsx
  Experience.tsx
  CVSection.tsx
  Contact.tsx
  Footer.tsx
context/       # LanguageContext (español/inglés)
lib/           # translations.ts — textos en es/en
public/        # archivos estáticos
  cv-es.pdf    # CV en español
  cv-en.pdf    # CV en inglés
```

## Idiomas
El portafolio soporta español e inglés. El idioma se maneja con `useLanguage()` del `LanguageContext`. Los textos están centralizados en `lib/translations.ts`.

Los CVs se descargan según el idioma activo:
- Español → `/cv-es.pdf`
- Inglés → `/cv-en.pdf`
