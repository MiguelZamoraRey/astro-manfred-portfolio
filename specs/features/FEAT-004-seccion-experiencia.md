---
id: FEAT-004
title: Sección Experiencia laboral
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Lista los trabajos previos y actuales del desarrollador con logo de empresa, nombre del rol, rango de años y descripción del puesto.

## Contexto

Es la sección más importante del portfolio para reclutadores. Cada entrada usa el primer rol del array `roles` de cada job en `cv.json`.

## Criterios de aceptación

- [ ] AC-1: Dado que `experience.jobs` tiene al menos un elemento, cuando se renderiza la sección, entonces aparece una lista con un `<li>` por cada job.
- [ ] AC-2: Dado que un job tiene `organization.image.link` con URL válida, cuando se renderiza, entonces se muestra el logo de la empresa con `max-width: 6.5em`.
- [ ] AC-3: Dado que un job NO tiene `organization.image.link`, cuando se renderiza, entonces se muestra `/images/noPhoto.webp` como placeholder.
- [ ] AC-4: Dado que un rol tiene `startDate` y `finishDate`, cuando se renderiza, entonces se muestra el rango de años (ej. "2022 - 2024").
- [ ] AC-5: Dado que un rol NO tiene `finishDate`, cuando se renderiza, entonces se muestra "Actualmente" como fecha de fin.
- [ ] AC-6: Dado que `organization.URL` está definido, cuando se renderiza, entonces el nombre de la empresa es un enlace `<a target="_blank">` a esa URL.
- [ ] AC-7: Dado que `organization.URL` es nulo o vacío, cuando se renderiza, entonces el enlace apunta a `#`.

## Casos de error

- CE-1: Si `roles[0].challenges[0].description` es nulo o undefined, el `<p>` de descripción renderiza vacío sin romper el layout.

## Fuera de alcance

- Mostrar múltiples roles por empresa
- Filtrar experiencia por tecnología
- Expandir/colapsar la descripción

## Dependencias

- DATA-001 (`experience.jobs`)
- DATA-002 (`titlesColor`, `secondaryFontColor`)
