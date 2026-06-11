---
id: FEAT-001
title: Página principal del portfolio
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

La página principal (`/`) compone todas las secciones del CV en una sola página estática, con visibilidad de secciones controlable por variables de entorno.

## Contexto

El portfolio es una Single Page donde el visitante ve toda la información del desarrollador de arriba a abajo. El orden y visibilidad de las secciones está definido en `index.astro`.

## Criterios de aceptación

- [ ] AC-1: Dado que el usuario visita `/`, cuando la página carga, entonces se renderiza el layout completo con las secciones Hero, About, Skills, Recommended, Experience, Projects, Education y Languages (según env vars).
- [ ] AC-2: Dado que la página carga, cuando el fondo de la sección `secondBg` se aplica, entonces las secciones About, Skills, Recommended y la fila inferior (Projects, Education, Languages) tienen `background-color: var(--secondaryBg)`.
- [ ] AC-3: Dado que la página carga, cuando el footer está presente, entonces muestra el nombre del autor con enlace a `https://www.mzrdeveloper.com/`.
- [ ] AC-4: Dado que `KeyboardManager` está incluido, cuando el usuario pulsa un atajo de teclado definido, entonces se ejecuta la acción correspondiente.

## Casos de error

- CE-1: Si el archivo `config/cv.json` tiene un error de parseo, el build falla con un mensaje de error de Astro/Vite (comportamiento esperado, no se maneja en runtime).

## Fuera de alcance

- Rutas adicionales (el portfolio es de una sola página)
- Sistema de navegación entre secciones con scroll suave (no implementado actualmente)
- Modo offline / PWA

## Dependencias

- DATA-001, DATA-002
- FEAT-002 al FEAT-009
- FEAT-010 (control de visibilidad por env vars)
- FEAT-011 (Layout y SEO)
