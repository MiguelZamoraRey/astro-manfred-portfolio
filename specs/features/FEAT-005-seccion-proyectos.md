---
id: FEAT-005
title: Sección Proyectos personales
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Lista los proyectos personales del desarrollador con nombre, descripción, enlace y rango de años. Tiene fallback a `manfredSpecificData.projects` si `experience.projects` está vacío.

## Contexto

Complementa la experiencia laboral mostrando trabajo propio. Los proyectos pueden provenir de dos fuentes distintas del CV Manfred, con normalización a un modelo común.

## Criterios de aceptación

- [ ] AC-1: Dado que `experience.projects` tiene proyectos con nombre, cuando se renderiza la sección, entonces se muestra un `<li>` por cada proyecto con nombre.
- [ ] AC-2: Dado que `experience.projects` está vacío y `manfredSpecificData.projects` tiene datos, cuando se renderiza, entonces se usa el fallback de Manfred.
- [ ] AC-3: Dado que un proyecto tiene `details.URL`, cuando se renderiza, entonces el nombre del proyecto es un enlace externo.
- [ ] AC-4: Dado que un proyecto tiene `roles[0].startDate` y `roles[0].finishDate`, cuando se renderiza, entonces se muestra el rango de años.
- [ ] AC-5: Dado que un proyecto tiene `roles[0].startDate` pero NO `finishDate`, cuando se renderiza, entonces la fecha de fin es "Actualmente".
- [ ] AC-6: Dado que tanto `experience.projects` como `manfredSpecificData.projects` están vacíos, cuando se evalúa el componente, entonces la sección completa no se renderiza.

## Casos de error

- CE-1: Si un proyecto no tiene `name` tras la normalización, se filtra y no aparece en la lista.

## Fuera de alcance

- Imágenes o capturas de pantalla de los proyectos
- Filtrado por tecnología o fecha
- Clasificación por tipo de proyecto

## Dependencias

- DATA-001 (`experience.projects`, `manfredSpecificData.projects`)
- DATA-002 (`titlesColor`, `secondaryFontColor`)
- FEAT-010 (la sección puede ocultarse con `PUBLIC_SHOW_PROJECTS=N`)
