---
id: FEAT-007
title: Sección Educación
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Lista la formación académica del desarrollador con nombre de institución, nombre del estudio y rango de años.

## Contexto

Sección opcional del portfolio (oculta por defecto). Muestra estudios reglados y formación académica formal. Se activa explícitamente con una variable de entorno.

## Criterios de aceptación

- [ ] AC-1: Dado que `knowledge.studies` tiene al menos un elemento, cuando se renderiza la sección, entonces se muestra un `<li>` por cada estudio.
- [ ] AC-2: Dado que un estudio tiene `startDate` y `finishDate`, cuando se renderiza, entonces se muestra el rango de años (ej. "2010 - 2014").
- [ ] AC-3: Dado que un estudio NO tiene `finishDate`, cuando se renderiza, entonces la fecha de fin se muestra como "Actualmente".
- [ ] AC-4: Dado que un estudio tiene `institution.name` y `name`, cuando se renderiza, entonces se muestra el nombre de la institución en `<h3>` y el nombre del título/estudio en `<p>`.

## Casos de error

- CE-1: Si `knowledge.studies` está vacío o no está definido, la sección se renderiza vacía (sin elementos en la lista).

## Fuera de alcance

- Logo o imagen de la institución
- Enlace a la institución o certificado
- Distinción entre tipo de estudio (grado, máster, curso, etc.)

## Dependencias

- DATA-001 (`knowledge.studies`)
- DATA-002 (`titlesColor`, `secondaryFontColor`)
- FEAT-010 (la sección se muestra solo si `PUBLIC_SHOW_EDUCATION=Y`)
