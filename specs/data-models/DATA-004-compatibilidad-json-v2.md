---
id: DATA-004
title: Compatibilidad de datos para rediseño visual V2
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Garantiza que el rediseño V2 no rompe la edición de contenido y estilos desde los JSON actuales (`cv.json`, `recommended.json`, `styles.json`).

## Contexto

El objetivo del rediseño es visual y de UX, no de migración de datos. Se requiere mantener compatibilidad para seguir editando la información como hasta ahora.

## Criterios de aceptación

- [ ] AC-1: Dado que un usuario edita `config/cv.json` con la estructura actual, cuando se renderiza V2, entonces los cambios aparecen sin requerir nuevas claves obligatorias.
- [ ] AC-2: Dado que un usuario edita `config/recommended.json` con la estructura actual, cuando se renderiza V2, entonces los cambios aparecen sin transformaciones adicionales.
- [ ] AC-3: Dado que un usuario ajusta `config/styles.json` en `colors`, cuando se renderiza V2, entonces la apariencia responde sin romper contraste mínimo ni legibilidad base.
- [ ] AC-4: Dado que una clave opcional no existe en los JSON actuales, cuando se renderiza V2, entonces el sistema usa fallback visual seguro.
- [ ] AC-5: Dado que se compara `main` (V1) con V2 a nivel de esquema de datos, cuando se revisan imports y accesos a JSON, entonces no se introduce ninguna clave nueva marcada como obligatoria.

## Casos de error

- CE-1: Si durante V2 se introduce dependencia de una clave nueva no documentada, debe considerarse incumplimiento de esta spec.

## Fuera de alcance

- Nuevo esquema de datos para CV
- Validación automática JSON schema en build
- CMS externo

## Dependencias

- DATA-001
- DATA-002
- DATA-003
- FEAT-012
