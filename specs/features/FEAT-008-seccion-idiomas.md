---
id: FEAT-008
title: Sección Idiomas
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Lista los idiomas del desarrollador con su nombre y nivel de dominio.

## Contexto

Sección opcional del portfolio (oculta por defecto). Los datos provienen de `knowledge.languages` en el CV Manfred.

## Criterios de aceptación

- [ ] AC-1: Dado que `knowledge.languages` tiene al menos un elemento, cuando se renderiza la sección, entonces se muestra un `<li>` por cada idioma.
- [ ] AC-2: Dado que un idioma tiene `fullName` y `level`, cuando se renderiza, entonces se muestra el nombre del idioma en `<h3>` y el nivel en `<p>`.

## Casos de error

- CE-1: Si `knowledge.languages` está vacío o no definido, la sección renderiza la lista vacía (sin mensaje de fallback).

## Fuera de alcance

- Indicador visual del nivel (barra de progreso, estrellas, etc.)
- Certificaciones de idioma con enlace

## Dependencias

- DATA-001 (`knowledge.languages`)
- DATA-002 (`titlesColor`, `secondaryFontColor`)
- FEAT-010 (la sección se muestra solo si `PUBLIC_SHOW_LANGUAGES=Y`)
