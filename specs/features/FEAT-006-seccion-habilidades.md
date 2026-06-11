---
id: FEAT-006
title: Sección Habilidades técnicas
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Muestra las habilidades técnicas del desarrollador como una lista de chips con icono SVG y nombre. Tiene fallback desde `knowledge.hardSkills` a `manfredSpecificData.mainStackTechs`.

## Contexto

Permite a los reclutadores identificar rápidamente el stack tecnológico. Los iconos SVG están predefinidos para las tecnologías más comunes; las tecnologías sin icono se muestran solo con texto.

## Criterios de aceptación

- [ ] AC-1: Dado que `knowledge.hardSkills` tiene elementos, cuando se renderiza la sección, entonces se muestra un `<li>` por cada skill.
- [ ] AC-2: Dado que `knowledge.hardSkills` está vacío y `manfredSpecificData.mainStackTechs` tiene datos, cuando se renderiza, entonces se usa el fallback de Manfred.
- [ ] AC-3: Dado que una skill tiene un nombre que coincide con una clave del mapa `SKILLS_ICONS` (HTML, CSS, JavaScript, React, Node, MySQL, Git, GitHub), cuando se renderiza, entonces se muestra el icono SVG correspondiente.
- [ ] AC-4: Dado que una skill tiene nombre `Next.js`, cuando se renderiza, entonces se busca el icono con clave `Next` (normalización de nombre).
- [ ] AC-5: Dado que una skill no tiene icono registrado en `SKILLS_ICONS`, cuando se renderiza, entonces se muestra solo el nombre de texto sin icono.

## Casos de error

- CE-1: Si ambas fuentes (`hardSkills` y `mainStackTechs`) están vacías, la lista `<ul>` no se renderiza (el `Section` con título sí se renderiza).

## Fuera de alcance

- Iconos para tecnologías fuera del mapa predefinido (requeriría una nueva spec)
- Nivel de dominio por skill (básico/intermedio/avanzado)
- Agrupación de skills por categoría

## Dependencias

- DATA-001 (`knowledge.hardSkills`, `manfredSpecificData.mainStackTechs`)
- DATA-002 (`titlesColor`)
- FEAT-010 (la sección puede ocultarse con `PUBLIC_SHOW_SKILLS=N`)
