---
id: DATA-003
title: Modelo de datos de recomendaciones (recommended.json)
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Describe la estructura del archivo `config/recommended.json`, que almacena los testimonios y recomendaciones profesionales que se muestran en la sección `Recommended`.

## Contexto

Las recomendaciones son datos externos al CV Manfred, por lo que se gestionan en un archivo separado. Se admite tanto la clave `recomendations` (typo histórico) como `recommendations` para compatibilidad hacia atrás.

## Estructura del modelo

```json
{
  "recommendations": [          // también acepta "recomendations" (typo legacy)
    {
      "firstName": string,
      "lastName": string,
      "img": string | null,     // nombre de archivo sin extensión, busca en /public/images/{img}.jpeg
      "company": string,
      "jobTitle": string,
      "text": string,           // el texto del testimonio
      "createdAt": string       // fecha legible, sin formato forzado
    }
  ]
}
```

## Criterios de aceptación

- [ ] AC-1: Dado que `config/recommended.json` tiene la clave `recommendations` o `recomendations` con al menos un elemento, cuando se renderiza `Recommended`, entonces se muestra la sección.
- [ ] AC-2: Dado que una recomendación tiene `img` definido, cuando se renderiza, entonces la imagen se carga desde `/images/{img}.jpeg`.
- [ ] AC-3: Dado que una recomendación tiene `img` nulo o vacío, cuando se renderiza, entonces se muestra `/images/noPhoto.webp` como fallback.
- [ ] AC-4: Dado que el array de recomendaciones está vacío, cuando se renderiza `Recommended`, entonces la sección no aparece en el DOM.

## Casos de error

- CE-1: Si el archivo `config/recommended.json` no contiene ninguna de las dos claves (`recommendations` ni `recomendations`), el componente trata el array como vacío y no renderiza nada.

## Fuera de alcance

- Rating numérico o sistema de estrellas para recomendaciones
- Fuente externa de recomendaciones (LinkedIn API, etc.)
- Imágenes en formato distinto a JPEG

## Dependencias

- FEAT-009 (Sección Recomendaciones)
