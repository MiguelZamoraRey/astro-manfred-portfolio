---
id: FEAT-010
title: Visibilidad de secciones por variables de entorno
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Permite activar o desactivar secciones del portfolio de forma declarativa usando variables de entorno públicas de Astro (`PUBLIC_*`), sin modificar el código fuente.

## Contexto

Algunos portfolios pueden querer omitir ciertas secciones según el contexto de publicación (versión corta para impresión, versión completa en web, etc.). El mecanismo usa las variables de entorno de Astro evaluadas en build time.

## Variables disponibles

| Variable                  | Default | Efecto                                        |
| ------------------------- | ------- | --------------------------------------------- |
| `PUBLIC_SHOW_SKILLS`      | visible | `=N` oculta la sección Habilidades            |
| `PUBLIC_SHOW_PROJECTS`    | visible | `=N` oculta la sección Proyectos              |
| `PUBLIC_SHOW_EDUCATION`   | oculta  | `=Y` muestra la sección Educación             |
| `PUBLIC_SHOW_LANGUAGES`   | oculta  | `=Y` muestra la sección Idiomas               |
| `PUBLIC_SHOW_RECOMMENDED` | visible | `=N` oculta la sección Recomendaciones        |
| `PUBLIC_EMAIL`            | (vacío) | Sobreescribe el email del cv.json en Hero     |
| `PUBLIC_PHONE`            | (vacío) | Sobreescribe el teléfono del cv.json en Hero  |
| `PUBLIC_MANFRED`          | (vacío) | URL del perfil Manfred a excluir de los links |

## Criterios de aceptación

- [ ] AC-1: Dado que `PUBLIC_SHOW_SKILLS` no está definida o tiene valor distinto a `N`, cuando carga la página, entonces la sección Skills se renderiza.
- [ ] AC-2: Dado que `PUBLIC_SHOW_SKILLS=N`, cuando carga la página, entonces la sección Skills no aparece en el DOM.
- [ ] AC-3: Dado que `PUBLIC_SHOW_PROJECTS` no está definida o tiene valor distinto a `N`, cuando carga la página, entonces la sección Projects se renderiza.
- [ ] AC-4: Dado que `PUBLIC_SHOW_PROJECTS=N`, cuando carga la página, entonces la sección Projects no aparece en el DOM.
- [ ] AC-5: Dado que `PUBLIC_SHOW_EDUCATION` no está definida o tiene valor distinto a `Y`, cuando carga la página, entonces la sección Education no aparece en el DOM.
- [ ] AC-6: Dado que `PUBLIC_SHOW_EDUCATION=Y`, cuando carga la página, entonces la sección Education se renderiza.
- [ ] AC-7: Dado que `PUBLIC_SHOW_LANGUAGES` no está definida o tiene valor distinto a `Y`, cuando carga la página, entonces la sección Languages no aparece en el DOM.
- [ ] AC-8: Dado que `PUBLIC_SHOW_LANGUAGES=Y`, cuando carga la página, entonces la sección Languages se renderiza.
- [ ] AC-9: Dado que `PUBLIC_SHOW_RECOMMENDED` no está definida o tiene valor distinto a `N`, cuando carga la página, entonces la sección Recommended se renderiza.
- [ ] AC-10: Dado que `PUBLIC_SHOW_RECOMMENDED=N`, cuando carga la página, entonces la sección Recommended no aparece en el DOM.

## Casos de error

- CE-1: Si una variable tiene un valor distinto a los esperados (`Y`/`N`), se aplica el comportamiento del default (sin lanzar error).

## Fuera de alcance

- Toggling dinámico en runtime (sin JS en cliente)
- Variables para controlar el orden de las secciones
- Configuración por usuario autenticado

## Dependencias

- FEAT-001 (la lógica de visibilidad vive en `index.astro`)
- FEAT-005, FEAT-006, FEAT-007, FEAT-008, FEAT-009 (las secciones controladas)
