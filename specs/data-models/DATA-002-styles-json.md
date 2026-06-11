---
id: DATA-002
title: Modelo de datos de estilos (styles.json)
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Describe la estructura del archivo `config/styles.json`, que centraliza la paleta de colores del portfolio y se inyecta como CSS custom properties en los componentes Astro.

## Contexto

Para evitar hardcodear colores en múltiples componentes, se creó un archivo de configuración de estilos que actúa como design token store. Cada componente importa los colores que necesita y los pasa a Astro's `define:vars` para generar CSS variables.

## Estructura del modelo

```json
{
  "colors": {
    "bgColor": string,          // Color de fondo principal
    "fontColor": string,        // Color de texto principal
    "titlesColor": string,      // Color de títulos (h1, h2, h3)
    "secondaryFontColor": string, // Color de texto secundario
    "heroTitle": string,        // Color del nombre en Hero
    "heroSecondary": string,    // Color secundario del Hero (iconos, acentos)
    "heroFrom": string,         // Color inicio degradado Hero
    "heroTo": string,           // Color fin degradado Hero
    "secondaryBg": string       // Color de fondo de secciones alternadas
  }
}
```

## Criterios de aceptación

- [ ] AC-1: Dado que `config/styles.json` existe con la clave `colors`, cuando cualquier componente importa los colores, entonces los valores están disponibles en tiempo de build.
- [ ] AC-2: Dado que los colores están definidos, cuando se renderiza `Layout`, entonces `bgColor` y `secondaryBg` se aplican correctamente como CSS variables.
- [ ] AC-3: Dado que `heroFrom` y `heroTo` están definidos, cuando se renderiza `Hero`, entonces el degradado de fondo usa esos dos colores.
- [ ] AC-4: Dado que `titlesColor` está definido, cuando se renderizan `Experience`, `Skills`, `Projects`, `Education`, `Languages`, entonces los títulos de sección tienen ese color.

## Casos de error

- CE-1: Si falta alguna clave de color en el JSON, el componente que la usa producirá una CSS variable `undefined`, lo que causará que el estilo no se aplique (debe documentarse pero no se maneja con fallback en código).

## Fuera de alcance

- Soporte para múltiples temas (dark/light mode)
- Generación dinámica de la paleta en runtime
- Variables de tipografía, espaciado u otros tokens que no sean colores

## Dependencias

- Todos los componentes de sección dependen de DATA-002 para sus colores
