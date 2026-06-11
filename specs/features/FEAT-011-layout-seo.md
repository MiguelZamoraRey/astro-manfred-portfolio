---
id: FEAT-011
title: Layout base y metadatos SEO
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

El layout base `Layout.astro` envuelve toda la página, inyecta los metadatos HTML (SEO, Open Graph, Twitter Cards) y el JSON-LD de Schema.org. También aplica los colores de fondo globales desde `styles.json`.

## Contexto

Un portfolio necesita SEO correcto para aparecer en búsquedas de nombre del desarrollador. Se incluye structured data (Schema.org) para mejorar el rich snippet en Google, y meta tags de OG y Twitter para compartir en redes sociales.

## Criterios de aceptación

- [ ] AC-1: Dado que el layout recibe una prop `title`, cuando se renderiza el HTML, entonces `<title>` contiene ese valor.
- [ ] AC-2: Dado que `aboutMe.profile` tiene datos, cuando se renderiza, entonces `<meta name="description">` contiene `profile.title` y `<meta name="author">` contiene el nombre completo.
- [ ] AC-3: Dado que la página tiene una URL pública, cuando se renderiza, entonces `<link rel="canonical">` apunta a la URL canónica basada en `https://mzrdeveloper.com`.
- [ ] AC-4: Dado que `profile.avatar.link` tiene una URL, cuando se renderiza, entonces `og:image` y `twitter:image` contienen esa URL.
- [ ] AC-5: Dado que se generan los meta tags Open Graph, cuando se renderiza, entonces existen `og:title`, `og:url`, `og:type`, `og:description` y `og:image`.
- [ ] AC-6: Dado que se generan los meta tags de Twitter, cuando se renderiza, entonces existen `twitter:card`, `twitter:domain`, `twitter:url` y `twitter:image`.
- [ ] AC-7: Dado que el layout se genera, cuando se renderiza, entonces hay un `<script type="application/ld+json">` con un grafo Schema.org que incluye los tipos `WebSite`, `Person`, `ProfilePage` e `ItemList` (proyectos).
- [ ] AC-8: Dado que `colors.bgColor` y `colors.fontColor` están definidos, cuando se renderiza el body, entonces se aplican como CSS custom properties globales.
- [ ] AC-9: Dado que `experience.projects` tiene proyectos, cuando se genera el JSON-LD, entonces la lista de proyectos aparece bajo `@type: ItemList` con nombre, descripción y URL de cada proyecto.

## Casos de error

- CE-1: Si `Astro.url` es undefined (contexto SSR sin URL), `canonicalUrl` cae back a `${siteUrl}/` sin romper el build.

## Fuera de alcance

- Meta tags de idiomas alternativos (`hreflang`)
- Sitemap XML generado automáticamente
- Preloading de fonts o recursos críticos en el `<head>`
- Robots.txt dinámico (existe como archivo estático en `/robots.txt`)

## Dependencias

- DATA-001 (`aboutMe`, `careerPreferences`, `experience`, `settings`)
- DATA-002 (`bgColor`, `fontColor`)
