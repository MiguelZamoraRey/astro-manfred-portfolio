---
id: FEAT-013
title: Rediseño V2 de sección Experiencia
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Rediseñar la sección de experiencia para sustituir la presentación actual por una composición más editorial y profesional, eliminando la sensación visual pobre de logos y tarjetas.

## Contexto

La experiencia laboral es el bloque más crítico del portfolio profesional. El rediseño debe elevar legibilidad y percepción de seniority, manteniendo exactamente la misma fuente de datos (`experience.jobs`).

Dirección de sección acordada:

- Patrón: timeline editorial
- Tratamiento de marca: sin logos de empresa; se usa sello textual con inicial
- Animación: entrada de items por viewport con stagger moderado

## Criterios de aceptación

- [ ] AC-1: Dado que `experience.jobs` contiene datos, cuando se renderiza la sección V2, entonces cada experiencia muestra claramente empresa, rol, rango temporal y resumen con jerarquía visual fuerte.
- [ ] AC-2: Dado que una empresa tiene imagen, cuando se renderiza, entonces la imagen no se muestra y se mantiene un identificador visual textual consistente (inicial + nombre de empresa).
- [ ] AC-3: Dado que una empresa no tiene imagen válida, cuando se renderiza, entonces el resultado visual es idéntico al caso con imagen (sin ramas visuales rotas).
- [ ] AC-4: Dado que hay múltiples experiencias, cuando se renderiza la lista, entonces la lectura cronológica se apoya en eje/timeline visual y mantiene escaneabilidad en desktop y mobile.
- [ ] AC-5: Dado que el usuario pasa por la sección, cuando entran los items en viewport, entonces hay animación de entrada con duración máxima de 450ms por item y sin usar animaciones de layout (`width/height/margin/padding`).
- [ ] AC-6: Dado que el contenido proviene del JSON, cuando se actualiza una empresa o descripción en `cv.json`, entonces el rediseño refleja el cambio sin ajustes adicionales.

## Casos de error

- CE-1: Si una experiencia no incluye `organization.URL`, el item se muestra sin enlace externo roto.
- CE-2: Si faltan fechas, la sección mantiene formato legible sin romper alineación.

## Fuera de alcance

- Soporte multi-rol por empresa
- Filtros por tecnología o empresa
- Línea temporal interactiva compleja con JS pesado

## Dependencias

- DATA-001 (`experience.jobs`)
- DATA-002 (`titlesColor`, `secondaryFontColor`, nuevos tonos dentro de `colors` si aplica)
- FEAT-012 (dirección visual V2 global)
