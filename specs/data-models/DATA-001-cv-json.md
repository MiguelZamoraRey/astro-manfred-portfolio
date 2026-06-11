---
id: DATA-001
title: Modelo de datos del CV (formato Manfred MAC)
status: implemented
created: 2026-06-11
updated: 2026-06-11
owner: MiguelZamoraRey
---

## Resumen

Describe la estructura del archivo `config/cv.json`, fuente de verdad del portfolio. Sigue el esquema [Manfred MAC v0.5](https://raw.githubusercontent.com/getmanfred/mac/v0.5/schema/schema.json).

## Contexto

El portfolio lee todos los datos personales, de experiencia y conocimiento desde un único archivo JSON compatible con el estándar abierto de Manfred. Esto permite reutilizar el CV exportado directamente desde la plataforma Manfred sin transformaciones manuales.

## Estructura del modelo

```
cv.json
├── settings
│   ├── language: "ES"
│   └── MACVersion: "0.5"
├── aboutMe
│   ├── profile
│   │   ├── name, surnames, title, description
│   │   ├── avatar.link, avatar.alt
│   │   └── location.country, region, municipality
│   └── relevantLinks[]
│       ├── type: "linkedin" | "github" | "twitter" | "other"
│       └── URL
├── experience
│   ├── jobs[]
│   │   ├── organization.name, organization.image, organization.URL
│   │   └── roles[]
│   │       ├── name, startDate, finishDate?
│   │       ├── challenges[].description
│   │       └── competences[].name
│   └── projects[]
│       ├── details.name, details.description, details.URL
│       ├── type
│       └── roles[].startDate, roles[].finishDate?
├── knowledge
│   ├── hardSkills[]
│   │   └── skill.name
│   ├── studies[]
│   │   ├── institution.name
│   │   ├── name, startDate, finishDate?
│   └── languages[]
│       ├── fullName
│       └── level
├── careerPreferences
│   └── contact
│       ├── contactMails[]
│       ├── contactPhones[]
│       └── publicProfiles[]
│           ├── type
│           └── URL
└── manfredSpecificData
    ├── mainStackTechs[].name
    └── projects[].name
```

## Criterios de aceptación

- [ ] AC-1: Dado que el archivo `config/cv.json` existe, cuando la aplicación se construye, entonces todos los componentes que leen de él compilan sin errores.
- [ ] AC-2: Dado que `aboutMe.profile` está definido, cuando se renderiza `Hero`, entonces se muestran `name`, `surnames`, `title`, `location` y `avatar`.
- [ ] AC-3: Dado que `experience.jobs` es un array no vacío, cuando se renderiza `Experience`, entonces aparece al menos un elemento de trabajo.
- [ ] AC-4: Dado que `knowledge.hardSkills` está vacío o ausente, cuando `manfredSpecificData.mainStackTechs` tiene datos, entonces `Skills` usa `mainStackTechs` como fallback.
- [ ] AC-5: Dado que `experience.projects` está vacío o ausente, cuando `manfredSpecificData.projects` tiene datos, entonces `Projects` usa el fallback de Manfred.
- [ ] AC-6: Dado que `careerPreferences.contact` contiene email y teléfono, cuando se renderiza `Hero`, entonces esos datos se pueden mostrar (o sobreescribir con env vars).

## Casos de error

- CE-1: Si `aboutMe.profile.avatar` no tiene `link`, el componente Hero debe renderizar un avatar de fallback o ninguna imagen sin romper el layout.
- CE-2: Si `organization.image` es nulo o su `link` está vacío, `Experience` debe renderizar la imagen placeholder `/images/noPhoto.webp`.
- CE-3: Si `knowledge.hardSkills` y `manfredSpecificData.mainStackTechs` están ambos vacíos, `Skills` no renderiza la sección de skills.

## Fuera de alcance

- Validación de schema en tiempo de build (no hay zod ni ajv configurado)
- Soporte para múltiples roles por job (solo se usa `roles[0]`)
- Internacionalización del CV para idioma distinto al configurado en `settings.language`

## Dependencias

- `config/cv.json` debe ser un JSON válido compatible con Manfred MAC v0.5
