---
id: FEAT-009
title: Sección Recomendaciones
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Muestra testimonios de personas que han trabajado con el desarrollador, con foto, nombre, empresa, cargo, texto de recomendación y fecha.

## Contexto

Las recomendaciones aportan credibilidad social. Los datos provienen de `config/recommended.json`, separado del CV Manfred para mayor flexibilidad editorial.

## Criterios de aceptación

- [ ] AC-1: Dado que `recommended.json` tiene al menos una recomendación, cuando se renderiza la sección, entonces aparece la sección con título "Recomendaciones" y un `<li>` por testimonio.
- [ ] AC-2: Dado que una recomendación tiene `img` definido, cuando se renderiza, entonces se muestra la imagen desde `/images/{img}.jpeg`.
- [ ] AC-3: Dado que una recomendación tiene `img` nulo o vacío, cuando se renderiza, entonces se muestra `/images/noPhoto.webp`.
- [ ] AC-4: Dado que una recomendación tiene `firstName`, `lastName`, `company` y `jobTitle`, cuando se renderiza, entonces se muestran el nombre completo en `<h3>` y "empresa - cargo" en `<h4>`.
- [ ] AC-5: Dado que una recomendación tiene `text`, cuando se renderiza, entonces el texto aparece entre comillas dentro de un `<p>`.
- [ ] AC-6: Dado que una recomendación tiene `createdAt`, cuando se renderiza, entonces se muestra en un elemento `<time>`.
- [ ] AC-7: Dado que el array de recomendaciones está vacío, cuando se evalúa el componente, entonces la sección completa no se renderiza en el DOM.

## Casos de error

- CE-1: Si `recommended.json` usa la clave `recomendations` (typo), el componente la detecta y la usa correctamente.

## Fuera de alcance

- Carrusel o paginación de recomendaciones
- Enlace al perfil de LinkedIn del recomendador
- Sistema para añadir nuevas recomendaciones sin editar el JSON

## Dependencias

- DATA-003 (`recommended.json`)
- DATA-002 (`titlesColor`, `secondaryFontColor`)
- FEAT-010 (la sección puede ocultarse con `PUBLIC_SHOW_RECOMMENDED=N`)
