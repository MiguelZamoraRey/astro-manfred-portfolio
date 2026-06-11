---
id: FEAT-014
title: Rediseño V2 de sección Habilidades
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Rediseñar la sección de habilidades para sustituir la lista actual por una composición más distintiva y profesional, mejorando lectura de stack y percepción técnica.

## Contexto

La sección actual no comunica con suficiente impacto el stack full stack. Se debe mejorar agrupación visual y tratamiento tipográfico, manteniendo compatibilidad total con las fuentes de datos actuales.

Dirección de sección acordada:

- Patrón: constelación de chips por categorías visuales
- Interacción: hover/focus con feedback sobrio
- Objetivo: escaneo rápido de stack sin perder claridad

## Criterios de aceptación

- [ ] AC-1: Dado que existen skills en `knowledge.hardSkills` o fallback en `manfredSpecificData.mainStackTechs`, cuando se renderiza V2, entonces se presenta una visualización clara y escaneable del stack.
- [ ] AC-2: Dado que una skill tiene icono mapeado, cuando se renderiza, entonces el icono se integra con estilo visual consistente (tamaño, color y alineación) con el resto del sistema.
- [ ] AC-3: Dado que una skill no tiene icono mapeado, cuando se renderiza, entonces se muestra un tratamiento textual con misma calidad visual y sin huecos de diseño.
- [ ] AC-4: Dado que se visualiza la sección en mobile, cuando se adapta el layout, entonces la legibilidad de skills se mantiene sin truncados problemáticos y con touch targets de al menos 40px de alto visual.
- [ ] AC-5: Dado que el usuario hace hover/focus en una skill, cuando ocurre, entonces existe feedback visual accesible y sobrio con contraste visible también en navegación por teclado.

## Casos de error

- CE-1: Si ambas fuentes de skills están vacías, la sección mantiene un estado vacío no roto y coherente con la V2.

## Fuera de alcance

- Medición de nivel por skill
- Certificaciones o badges externos
- Motor de búsqueda de tecnologías

## Dependencias

- DATA-001 (`knowledge.hardSkills`, `manfredSpecificData.mainStackTechs`)
- DATA-002 (paleta y acentos)
- FEAT-012 (dirección visual V2 global)
