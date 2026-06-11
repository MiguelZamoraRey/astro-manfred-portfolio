---
id: FEAT-003
title: Sección Sobre Mí
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Muestra el párrafo de descripción personal del desarrollador obtenido de `aboutMe.profile.description`.

## Contexto

Es la sección de texto libre donde el desarrollador se presenta con sus propias palabras. Intencionalmente simple: un título y un párrafo.

## Criterios de aceptación

- [ ] AC-1: Dado que `aboutMe.profile.description` tiene contenido, cuando se renderiza la sección, entonces se muestra el texto dentro de un `<p>` bajo el título "Sobre mí".
- [ ] AC-2: Dado que la sección usa el componente `Section`, cuando se renderiza, entonces hereda el layout y estilos del contenedor de sección.

## Casos de error

- CE-1: Si `description` es un string vacío, la sección se renderiza con el `<p>` vacío (sin mensaje de fallback).

## Fuera de alcance

- Edición inline del texto
- Texto truncado con "leer más"
- Formateo de markdown dentro de la descripción

## Dependencias

- DATA-001 (`aboutMe.profile.description`)
