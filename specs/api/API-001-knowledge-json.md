---
id: API-001
title: Endpoint GET /knowledge.json — CV legible por LLMs
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Expone la información del CV del desarrollador como un endpoint JSON estático optimizado para ser consumido por LLMs y herramientas de IA, devolviendo datos normalizados y deduplicados.

## Contexto

Con la aparición de agentes de IA y herramientas de búsqueda semántica, es útil exponer el CV en un formato limpio y machine-readable distinto al HTML renderizado. El endpoint se genera en build time (prerenderizado) y se sirve como archivo estático.

## Contrato de la respuesta

```
GET /knowledge.json
Content-Type: application/json; charset=utf-8
Cache-Control: public, max-age=3600
```

```json
{
  "source": "https://mzrdeveloper.com/knowledge.json",
  "lastUpdated": "<ISO 8601 timestamp del build>",
  "person": {
    "name": string,
    "title": string | null,
    "description": string | null,
    "location": {
      "municipality": string | null,
      "region": string | null,
      "country": string | null
    }
  },
  "contact": {
    "emails": string[]
  },
  "links": [
    { "type": string, "URL": string }
  ],
  "experience": [
    {
      "company": string | null,
      "companyUrl": string | null,
      "role": string | null,
      "startDate": string | null,
      "finishDate": string | null,
      "summary": string | null
    }
  ],
  "projects": [
    {
      "name": string | null,
      "description": string | null,
      "url": string | null,
      "type": string | null,
      "startDate": string | null,
      "finishDate": string | null
    }
  ],
  "skills": string[]
}
```

## Criterios de aceptación

- [ ] AC-1: Dado que el build se ejecuta, cuando se accede a `/knowledge.json`, entonces devuelve HTTP 200 con `Content-Type: application/json`.
- [ ] AC-2: Dado que el archivo se genera en build time, cuando se accede al endpoint, entonces `lastUpdated` contiene la fecha ISO 8601 del momento del build.
- [ ] AC-3: Dado que `aboutMe.profile` tiene datos, cuando se devuelve la respuesta, entonces `person` contiene `name`, `title`, `description` y `location` con los datos del perfil.
- [ ] AC-4: Dado que `links` combina `relevantLinks` y `publicProfiles`, cuando se devuelve la respuesta, entonces los links están deduplicados por URL y solo incluyen entradas con URL definida.
- [ ] AC-5: Dado que `experience.jobs` tiene datos, cuando se devuelve la respuesta, entonces `experience` contiene un objeto normalizado por job con `company`, `role`, `startDate`, `finishDate` y `summary`.
- [ ] AC-6: Dado que `knowledge.hardSkills` tiene datos, cuando se devuelve la respuesta, entonces `skills` es un array de strings con los nombres de las skills.
- [ ] AC-7: Dado que `knowledge.hardSkills` está vacío, cuando se devuelve la respuesta, entonces `skills` usa `manfredSpecificData.mainStackTechs` como fallback.
- [ ] AC-8: Dado que el endpoint tiene `Cache-Control: public, max-age=3600`, cuando se sirve, entonces los proxies y CDNs pueden cachearlo hasta 1 hora.
- [ ] AC-9: Dado que `prerender = true` está declarado, cuando se construye el proyecto, entonces Astro genera el archivo `knowledge.json` como asset estático.

## Casos de error

- CE-1: Si algún campo del CV es undefined en runtime, el endpoint devuelve `null` para ese campo en lugar de omitirlo o lanzar error.

## Fuera de alcance

- Autenticación o rate limiting (es un endpoint público de solo lectura)
- Versiones del endpoint (`/v1/knowledge.json`)
- Soporte para otros formatos (XML, YAML)
- Datos de contacto privados (teléfono, email) en la respuesta pública

## Dependencias

- DATA-001 (toda la estructura de `cv.json`)
