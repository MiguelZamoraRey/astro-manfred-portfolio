---
id: FEAT-015
title: Rediseño V2 de sección Recomendaciones
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Rediseñar la sección de recomendaciones para mejorar credibilidad y lectura testimonial, con una composición más editorial y menos "lista plana".

## Contexto

Las recomendaciones son prueba social clave. Actualmente su diseño no capitaliza su valor. Se requiere una presentación más cuidada y jerárquica sin cambiar la estructura de `recommended.json`.

Dirección de sección acordada:

- Patrón: masonry ligera
- Enfoque: ritmo editorial y lectura testimonial
- Motion: entrada escalonada moderada en viewport

## Criterios de aceptación

- [ ] AC-1: Dado que hay recomendaciones, cuando se renderiza V2, entonces cada testimonio muestra claramente autor, contexto profesional y contenido con jerarquía visual clara.
- [ ] AC-2: Dado que una recomendación tiene imagen, cuando se renderiza, entonces la imagen se presenta con tratamiento visual consistente y no distorsionado.
- [ ] AC-3: Dado que una recomendación no tiene imagen, cuando se renderiza, entonces se muestra un fallback visual elegante (no genérico) coherente con V2.
- [ ] AC-4: Dado que el texto testimonial puede ser largo, cuando se renderiza, entonces se mantiene legibilidad y ritmo visual en desktop y mobile sin cortar contenido por CSS.
- [ ] AC-5: Dado que la sección usa datos de `recommended.json`, cuando se edita el contenido en ese archivo, entonces la V2 refleja cambios sin migraciones de formato.
- [ ] AC-6: Dado que hay 2 o más recomendaciones, cuando se renderiza en desktop, entonces la composición usa columnas tipo masonry ligera; en mobile se degrada a una columna lineal legible.

## Casos de error

- CE-1: Si el archivo usa `recomendations` o `recommendations`, la sección sigue mostrando testimonios.
- CE-2: Si el array está vacío, la sección no se renderiza, sin huecos visuales.

## Fuera de alcance

- Integración con LinkedIn API
- Carrusel con autoplay
- Sistema de valoración por estrellas

## Dependencias

- DATA-003 (`recommended.json`)
- DATA-002 (colores y contraste)
- FEAT-012 (dirección visual V2 global)
