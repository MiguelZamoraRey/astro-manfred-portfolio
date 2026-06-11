---
id: FEAT-012
title: Rediseño visual V2 del portfolio profesional
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Definir y aplicar un rediseño visual integral del portfolio para transmitir una imagen más premium, técnica y memorable, manteniendo la edición de contenido desde los JSON existentes sin cambios estructurales.

## Contexto

El portfolio actual funciona correctamente a nivel de contenido, pero su lenguaje visual no transmite suficiente diferenciación para un perfil senior full stack. El objetivo es mejorar percepción de calidad y personalidad visual sin romper accesibilidad, rendimiento ni mantenibilidad.

Dirección visual acordada:

- Estética: brutalist-tech
- Tipografía: Sora (display/headings) + Source Sans 3 (body/UI)
- Paleta: slate + petróleo + ámbar (sin base morada)
- Animación: intensidad media, con entradas por sección y stagger moderado

## Criterios de aceptación

- [ ] AC-1: Dado que la versión V2 se activa, cuando el usuario visita la home, entonces se aplica de forma consistente una identidad brutalist-tech (tipografía, paleta y componentes) en Hero, Experiencia, Habilidades y Recomendaciones.
- [ ] AC-2: Dado que el contenido se mantiene en `config/cv.json` y `config/recommended.json`, cuando se renderiza la V2, entonces no es necesario modificar la estructura de estos archivos para editar textos, links o datos.
- [ ] AC-3: Dado que la paleta y tokens de color siguen viniendo de `config/styles.json`, cuando se ajustan los colores en ese archivo, entonces el tema visual responde sin cambios de código estructural.
- [ ] AC-4: Dado que el rediseño incluye animación media, cuando se navega por la página, entonces las animaciones usan `transform/opacity`, no bloquean interacción, y se reducen con `prefers-reduced-motion`.
- [ ] AC-5: Dado que el portfolio está orientado a reclutadores y tech leads, cuando consumen la página, entonces la jerarquía de información prioriza comprensión rápida del perfil, experiencia y stack en menos de 2 scrolls en desktop.
- [ ] AC-6: Dado que el header actual es usable, cuando se aplica V2, entonces se mantiene la botonera y accesibilidad, mejorando únicamente la ambientación de fondo.
- [ ] AC-7: Dado que se ejecuta auditoría de calidad en la home, cuando se evalúa con Lighthouse en modo producción, entonces Performance es >= 90 y Accessibility es >= 95 en mobile.

## Casos de error

- CE-1: Si algún bloque visual de V2 no puede renderizarse por ausencia de datos opcionales, la sección debe mantener un fallback visual legible sin romper layout.
- CE-2: Si `prefers-reduced-motion` está activo, las animaciones deben reducirse o desactivarse sin pérdida de información.

## Fuera de alcance

- Cambios de estructura de datos en `cv.json` o `recommended.json`
- Reescritura del copy del portfolio
- Internacionalización adicional
- Nuevas rutas o multipágina
- Refactor de negocio en endpoint `knowledge.json`

## Dependencias

- FEAT-004 (experiencia)
- FEAT-006 (habilidades)
- FEAT-009 (recomendaciones)
- FEAT-011 (layout y base visual)
- DATA-002 (tokens de color)
