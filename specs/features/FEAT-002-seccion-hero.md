---
id: FEAT-002
title: Sección Hero — cabecera del portfolio
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Muestra la cabecera principal del portfolio con foto, nombre, título profesional, ubicación, datos de contacto y enlaces a redes sociales.

## Contexto

Es la primera sección visible al cargar el portfolio. Concentra la identidad del desarrollador y los puntos de contacto principales. Los datos de contacto pueden sobreescribirse con variables de entorno para no exponer información privada en el repositorio público.

## Criterios de aceptación

- [ ] AC-1: Dado que `aboutMe.profile` tiene `name`, `surnames` y `title`, cuando se renderiza Hero, entonces se muestra el nombre completo en `<h1>` y el título en `<h2>`.
- [ ] AC-2: Dado que `location` tiene `municipality`, `region` y `country`, cuando se renderiza Hero, entonces se muestra la ubicación con el icono `WorldMap`.
- [ ] AC-3: Dado que `avatar.link` tiene una URL válida, cuando se renderiza Hero, entonces se muestra la imagen de perfil.
- [ ] AC-4: Dado que `relevantLinks` y/o `careerPreferences.contact.publicProfiles` contienen URLs, cuando se renderiza Hero, entonces se muestran los iconos de redes sociales deduplicados y sin incluir el perfil de Manfred.
- [ ] AC-5: Dado que `PUBLIC_EMAIL` está definido como env var, cuando se renderiza Hero, entonces se usa ese email en lugar del obtenido desde `cv.json`.
- [ ] AC-6: Dado que `PUBLIC_PHONE` está definido como env var, cuando se renderiza Hero, entonces se usa ese teléfono en lugar del obtenido desde `cv.json`.
- [ ] AC-7: Dado que `PUBLIC_MANFRED` está definido como env var, cuando se renderiza Hero, entonces ese perfil Manfred se excluye de los enlaces de redes sociales visibles.
- [ ] AC-8: Dado que existe `config/cv.pdf`, cuando se renderiza Hero, entonces hay un botón de descarga del CV que apunta al PDF.

## Casos de error

- CE-1: Si `avatar.link` está vacío o es nulo, la imagen de perfil no se renderiza (sin imagen de fallback en Hero actualmente).
- CE-2: Si un `relevantLink` no tiene `URL`, ese enlace se omite del renderizado.
- CE-3: Si ninguna env var de contacto está definida y `cv.json` tampoco tiene email/teléfono, esos campos simplemente no aparecen.

## Fuera de alcance

- Animaciones de entrada o transiciones CSS en el Hero
- Modo oscuro/claro switchable desde el Hero
- Edición inline de datos de contacto

## Dependencias

- DATA-001 (`aboutMe`, `careerPreferences`)
- DATA-002 (`heroTitle`, `heroSecondary`, `heroFrom`, `heroTo`)
- FEAT-011 (Layout que engloba el componente)
